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
exports.GetUserTaskListForUserResponse = exports.GetUserTaskListForUserRequest = exports.GetUserTaskListForUser200ApplicationJson = exports.GetUserTaskListForUserQueryParams = exports.GetUserTaskListForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserTaskListForUserPathParams = /** @class */ (function (_super) {
    __extends(GetUserTaskListForUserPathParams, _super);
    function GetUserTaskListForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_gid" }),
        __metadata("design:type", String)
    ], GetUserTaskListForUserPathParams.prototype, "userGid", void 0);
    return GetUserTaskListForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUserTaskListForUserPathParams = GetUserTaskListForUserPathParams;
var GetUserTaskListForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetUserTaskListForUserQueryParams, _super);
    function GetUserTaskListForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetUserTaskListForUserQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetUserTaskListForUserQueryParams.prototype, "optPretty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], GetUserTaskListForUserQueryParams.prototype, "workspace", void 0);
    return GetUserTaskListForUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUserTaskListForUserQueryParams = GetUserTaskListForUserQueryParams;
var GetUserTaskListForUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserTaskListForUser200ApplicationJson, _super);
    function GetUserTaskListForUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", shared.UserTaskListResponse)
    ], GetUserTaskListForUser200ApplicationJson.prototype, "data", void 0);
    return GetUserTaskListForUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUserTaskListForUser200ApplicationJson = GetUserTaskListForUser200ApplicationJson;
var GetUserTaskListForUserRequest = /** @class */ (function (_super) {
    __extends(GetUserTaskListForUserRequest, _super);
    function GetUserTaskListForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserTaskListForUserPathParams)
    ], GetUserTaskListForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserTaskListForUserQueryParams)
    ], GetUserTaskListForUserRequest.prototype, "queryParams", void 0);
    return GetUserTaskListForUserRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserTaskListForUserRequest = GetUserTaskListForUserRequest;
var GetUserTaskListForUserResponse = /** @class */ (function (_super) {
    __extends(GetUserTaskListForUserResponse, _super);
    function GetUserTaskListForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserTaskListForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetUserTaskListForUserResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserTaskListForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserTaskListForUser200ApplicationJson)
    ], GetUserTaskListForUserResponse.prototype, "getUserTaskListForUser200ApplicationJSONObject", void 0);
    return GetUserTaskListForUserResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserTaskListForUserResponse = GetUserTaskListForUserResponse;
