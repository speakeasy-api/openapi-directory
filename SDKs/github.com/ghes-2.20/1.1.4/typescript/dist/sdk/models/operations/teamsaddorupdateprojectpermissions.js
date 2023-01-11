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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsAddOrUpdateProjectPermissionsResponse = exports.TeamsAddOrUpdateProjectPermissionsRequest = exports.TeamsAddOrUpdateProjectPermissions403ApplicationJson = exports.TeamsAddOrUpdateProjectPermissionsRequestBody = exports.TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = exports.TeamsAddOrUpdateProjectPermissionsHeaders = exports.TeamsAddOrUpdateProjectPermissionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var TeamsAddOrUpdateProjectPermissionsPathParams = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsPathParams, _super);
    function TeamsAddOrUpdateProjectPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsPathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsPathParams.prototype, "teamId", void 0);
    return TeamsAddOrUpdateProjectPermissionsPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissionsPathParams = TeamsAddOrUpdateProjectPermissionsPathParams;
var TeamsAddOrUpdateProjectPermissionsHeaders = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsHeaders, _super);
    function TeamsAddOrUpdateProjectPermissionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsHeaders.prototype, "accept", void 0);
    return TeamsAddOrUpdateProjectPermissionsHeaders;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissionsHeaders = TeamsAddOrUpdateProjectPermissionsHeaders;
var TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum;
(function (TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum) {
    TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum["Read"] = "read";
    TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum["Write"] = "write";
    TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum["Admin"] = "admin";
})(TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = exports.TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum || (exports.TeamsAddOrUpdateProjectPermissionsRequestBodyPermissionEnum = {}));
var TeamsAddOrUpdateProjectPermissionsRequestBody = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsRequestBody, _super);
    function TeamsAddOrUpdateProjectPermissionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permission" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsRequestBody.prototype, "permission", void 0);
    return TeamsAddOrUpdateProjectPermissionsRequestBody;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissionsRequestBody = TeamsAddOrUpdateProjectPermissionsRequestBody;
var TeamsAddOrUpdateProjectPermissions403ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissions403ApplicationJson, _super);
    function TeamsAddOrUpdateProjectPermissions403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissions403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissions403ApplicationJson.prototype, "message", void 0);
    return TeamsAddOrUpdateProjectPermissions403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissions403ApplicationJson = TeamsAddOrUpdateProjectPermissions403ApplicationJson;
var TeamsAddOrUpdateProjectPermissionsRequest = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsRequest, _super);
    function TeamsAddOrUpdateProjectPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsPathParams)
    ], TeamsAddOrUpdateProjectPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsHeaders)
    ], TeamsAddOrUpdateProjectPermissionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissionsRequestBody)
    ], TeamsAddOrUpdateProjectPermissionsRequest.prototype, "request", void 0);
    return TeamsAddOrUpdateProjectPermissionsRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissionsRequest = TeamsAddOrUpdateProjectPermissionsRequest;
var TeamsAddOrUpdateProjectPermissionsResponse = /** @class */ (function (_super) {
    __extends(TeamsAddOrUpdateProjectPermissionsResponse, _super);
    function TeamsAddOrUpdateProjectPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsAddOrUpdateProjectPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsAddOrUpdateProjectPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsAddOrUpdateProjectPermissions403ApplicationJson)
    ], TeamsAddOrUpdateProjectPermissionsResponse.prototype, "teamsAddOrUpdateProjectPermissions403ApplicationJSONObject", void 0);
    return TeamsAddOrUpdateProjectPermissionsResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsAddOrUpdateProjectPermissionsResponse = TeamsAddOrUpdateProjectPermissionsResponse;
