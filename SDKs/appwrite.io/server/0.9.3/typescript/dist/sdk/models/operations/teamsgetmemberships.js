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
exports.TeamsGetMembershipsResponse = exports.TeamsGetMembershipsRequest = exports.TeamsGetMembershipsSecurity = exports.TeamsGetMembershipsQueryParams = exports.TeamsGetMembershipsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsGetMembershipsPathParams = /** @class */ (function (_super) {
    __extends(TeamsGetMembershipsPathParams, _super);
    function TeamsGetMembershipsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=teamId" }),
        __metadata("design:type", String)
    ], TeamsGetMembershipsPathParams.prototype, "teamId", void 0);
    return TeamsGetMembershipsPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsGetMembershipsPathParams = TeamsGetMembershipsPathParams;
var TeamsGetMembershipsQueryParams = /** @class */ (function (_super) {
    __extends(TeamsGetMembershipsQueryParams, _super);
    function TeamsGetMembershipsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TeamsGetMembershipsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TeamsGetMembershipsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderType" }),
        __metadata("design:type", String)
    ], TeamsGetMembershipsQueryParams.prototype, "orderType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], TeamsGetMembershipsQueryParams.prototype, "search", void 0);
    return TeamsGetMembershipsQueryParams;
}(utils_1.SpeakeasyBase));
exports.TeamsGetMembershipsQueryParams = TeamsGetMembershipsQueryParams;
var TeamsGetMembershipsSecurity = /** @class */ (function (_super) {
    __extends(TeamsGetMembershipsSecurity, _super);
    function TeamsGetMembershipsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], TeamsGetMembershipsSecurity.prototype, "jwt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], TeamsGetMembershipsSecurity.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], TeamsGetMembershipsSecurity.prototype, "project", void 0);
    return TeamsGetMembershipsSecurity;
}(utils_1.SpeakeasyBase));
exports.TeamsGetMembershipsSecurity = TeamsGetMembershipsSecurity;
var TeamsGetMembershipsRequest = /** @class */ (function (_super) {
    __extends(TeamsGetMembershipsRequest, _super);
    function TeamsGetMembershipsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsGetMembershipsPathParams)
    ], TeamsGetMembershipsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsGetMembershipsQueryParams)
    ], TeamsGetMembershipsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsGetMembershipsSecurity)
    ], TeamsGetMembershipsRequest.prototype, "security", void 0);
    return TeamsGetMembershipsRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsGetMembershipsRequest = TeamsGetMembershipsRequest;
var TeamsGetMembershipsResponse = /** @class */ (function (_super) {
    __extends(TeamsGetMembershipsResponse, _super);
    function TeamsGetMembershipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsGetMembershipsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsGetMembershipsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MembershipList)
    ], TeamsGetMembershipsResponse.prototype, "membershipList", void 0);
    return TeamsGetMembershipsResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsGetMembershipsResponse = TeamsGetMembershipsResponse;
