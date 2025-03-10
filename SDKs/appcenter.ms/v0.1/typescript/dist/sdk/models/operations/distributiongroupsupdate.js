"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.DistributionGroupsUpdateResponse = exports.DistributionGroupsUpdate200ApplicationJSON = exports.DistributionGroupsUpdate200ApplicationJSONOriginEnum = exports.DistributionGroupsUpdateDefaultApplicationJSON = exports.DistributionGroupsUpdateDefaultApplicationJSONError = exports.DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum = exports.DistributionGroupsUpdateRequest = exports.DistributionGroupsUpdateRequestBody = exports.DistributionGroupsUpdateSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var DistributionGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateSecurity, _super);
    function DistributionGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Token",
        }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateSecurity.prototype, "apiToken", void 0);
    return DistributionGroupsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateSecurity = DistributionGroupsUpdateSecurity;
/**
 * The attributes to update for the distribution group
 */
var DistributionGroupsUpdateRequestBody = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateRequestBody, _super);
    function DistributionGroupsUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_public" }),
        __metadata("design:type", Boolean)
    ], DistributionGroupsUpdateRequestBody.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateRequestBody.prototype, "name", void 0);
    return DistributionGroupsUpdateRequestBody;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateRequestBody = DistributionGroupsUpdateRequestBody;
var DistributionGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateRequest, _super);
    function DistributionGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DistributionGroupsUpdateRequestBody)
    ], DistributionGroupsUpdateRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=app_name",
        }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateRequest.prototype, "appName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=distribution_group_name",
        }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateRequest.prototype, "distributionGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner_name",
        }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateRequest.prototype, "ownerName", void 0);
    return DistributionGroupsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateRequest = DistributionGroupsUpdateRequest;
var DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum;
(function (DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum) {
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["BadRequest"] = "BadRequest";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["Conflict"] = "Conflict";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["NotAcceptable"] = "NotAcceptable";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["NotFound"] = "NotFound";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["InternalServerError"] = "InternalServerError";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["Unauthorized"] = "Unauthorized";
    DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum["TooManyRequests"] = "TooManyRequests";
})(DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum = exports.DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum || (exports.DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum = {}));
var DistributionGroupsUpdateDefaultApplicationJSONError = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateDefaultApplicationJSONError, _super);
    function DistributionGroupsUpdateDefaultApplicationJSONError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateDefaultApplicationJSONError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateDefaultApplicationJSONError.prototype, "message", void 0);
    return DistributionGroupsUpdateDefaultApplicationJSONError;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateDefaultApplicationJSONError = DistributionGroupsUpdateDefaultApplicationJSONError;
/**
 * Error
 */
var DistributionGroupsUpdateDefaultApplicationJSON = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateDefaultApplicationJSON, _super);
    function DistributionGroupsUpdateDefaultApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        (0, class_transformer_1.Type)(function () { return DistributionGroupsUpdateDefaultApplicationJSONError; }),
        __metadata("design:type", DistributionGroupsUpdateDefaultApplicationJSONError)
    ], DistributionGroupsUpdateDefaultApplicationJSON.prototype, "error", void 0);
    return DistributionGroupsUpdateDefaultApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateDefaultApplicationJSON = DistributionGroupsUpdateDefaultApplicationJSON;
/**
 * The creation origin of this distribution group
 */
var DistributionGroupsUpdate200ApplicationJSONOriginEnum;
(function (DistributionGroupsUpdate200ApplicationJSONOriginEnum) {
    DistributionGroupsUpdate200ApplicationJSONOriginEnum["Appcenter"] = "appcenter";
    DistributionGroupsUpdate200ApplicationJSONOriginEnum["Hockeyapp"] = "hockeyapp";
})(DistributionGroupsUpdate200ApplicationJSONOriginEnum = exports.DistributionGroupsUpdate200ApplicationJSONOriginEnum || (exports.DistributionGroupsUpdate200ApplicationJSONOriginEnum = {}));
/**
 * Success
 */
var DistributionGroupsUpdate200ApplicationJSON = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdate200ApplicationJSON, _super);
    function DistributionGroupsUpdate200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "display_name" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdate200ApplicationJSON.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdate200ApplicationJSON.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_public" }),
        __metadata("design:type", Boolean)
    ], DistributionGroupsUpdate200ApplicationJSON.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdate200ApplicationJSON.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "origin" }),
        __metadata("design:type", String)
    ], DistributionGroupsUpdate200ApplicationJSON.prototype, "origin", void 0);
    return DistributionGroupsUpdate200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdate200ApplicationJSON = DistributionGroupsUpdate200ApplicationJSON;
var DistributionGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(DistributionGroupsUpdateResponse, _super);
    function DistributionGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DistributionGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DistributionGroupsUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DistributionGroupsUpdateResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DistributionGroupsUpdate200ApplicationJSON)
    ], DistributionGroupsUpdateResponse.prototype, "distributionGroupsUpdate200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DistributionGroupsUpdateDefaultApplicationJSON)
    ], DistributionGroupsUpdateResponse.prototype, "distributionGroupsUpdateDefaultApplicationJSONObject", void 0);
    return DistributionGroupsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.DistributionGroupsUpdateResponse = DistributionGroupsUpdateResponse;
