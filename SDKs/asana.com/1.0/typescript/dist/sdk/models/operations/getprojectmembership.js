"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectMembershipResponse = exports.GetProjectMembershipRequest = exports.GetProjectMembership200ApplicationJson = exports.GetProjectMembershipQueryParams = exports.GetProjectMembershipPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetProjectMembershipPathParams = /** @class */ (function (_super) {
    __extends(GetProjectMembershipPathParams, _super);
    function GetProjectMembershipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_membership_gid" }),
        __metadata("design:type", String)
    ], GetProjectMembershipPathParams.prototype, "projectMembershipGid", void 0);
    return GetProjectMembershipPathParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectMembershipPathParams = GetProjectMembershipPathParams;
var GetProjectMembershipQueryParams = /** @class */ (function (_super) {
    __extends(GetProjectMembershipQueryParams, _super);
    function GetProjectMembershipQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetProjectMembershipQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetProjectMembershipQueryParams.prototype, "optPretty", void 0);
    return GetProjectMembershipQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetProjectMembershipQueryParams = GetProjectMembershipQueryParams;
var GetProjectMembership200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetProjectMembership200ApplicationJson, _super);
    function GetProjectMembership200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectMembershipResponse)
    ], GetProjectMembership200ApplicationJson.prototype, "data", void 0);
    return GetProjectMembership200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetProjectMembership200ApplicationJson = GetProjectMembership200ApplicationJson;
var GetProjectMembershipRequest = /** @class */ (function (_super) {
    __extends(GetProjectMembershipRequest, _super);
    function GetProjectMembershipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectMembershipPathParams)
    ], GetProjectMembershipRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectMembershipQueryParams)
    ], GetProjectMembershipRequest.prototype, "queryParams", void 0);
    return GetProjectMembershipRequest;
}(utils_1.SpeakeasyBase));
exports.GetProjectMembershipRequest = GetProjectMembershipRequest;
var GetProjectMembershipResponse = /** @class */ (function (_super) {
    __extends(GetProjectMembershipResponse, _super);
    function GetProjectMembershipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetProjectMembershipResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetProjectMembershipResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetProjectMembershipResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetProjectMembership200ApplicationJson)
    ], GetProjectMembershipResponse.prototype, "getProjectMembership200ApplicationJSONObject", void 0);
    return GetProjectMembershipResponse;
}(utils_1.SpeakeasyBase));
exports.GetProjectMembershipResponse = GetProjectMembershipResponse;
