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
exports.PostSpacesIdCompanyEntitiesResponse = exports.PostSpacesIdCompanyEntities201ApplicationJSON = exports.PostSpacesIdCompanyEntitiesRequest = exports.PostSpacesIdCompanyEntitiesRequestBody = exports.PostSpacesIdCompanyEntitiesSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PostSpacesIdCompanyEntitiesSecurity = /** @class */ (function (_super) {
    __extends(PostSpacesIdCompanyEntitiesSecurity, _super);
    function PostSpacesIdCompanyEntitiesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesSecurity.prototype, "gmaAuth", void 0);
    return PostSpacesIdCompanyEntitiesSecurity;
}(utils_1.SpeakeasyBase));
exports.PostSpacesIdCompanyEntitiesSecurity = PostSpacesIdCompanyEntitiesSecurity;
/**
 * Company to add Name or LegalName are mandatory
 */
var PostSpacesIdCompanyEntitiesRequestBody = /** @class */ (function (_super) {
    __extends(PostSpacesIdCompanyEntitiesRequestBody, _super);
    function PostSpacesIdCompanyEntitiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ApeCode" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "apeCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ArchivalDate" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "archivalDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Comment" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LegalName" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "legalName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LegalStatut" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "legalStatut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Name" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RegistrationNumber" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "registrationNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Type" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "VatNumber" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequestBody.prototype, "vatNumber", void 0);
    return PostSpacesIdCompanyEntitiesRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostSpacesIdCompanyEntitiesRequestBody = PostSpacesIdCompanyEntitiesRequestBody;
var PostSpacesIdCompanyEntitiesRequest = /** @class */ (function (_super) {
    __extends(PostSpacesIdCompanyEntitiesRequest, _super);
    function PostSpacesIdCompanyEntitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostSpacesIdCompanyEntitiesRequestBody)
    ], PostSpacesIdCompanyEntitiesRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesRequest.prototype, "id", void 0);
    return PostSpacesIdCompanyEntitiesRequest;
}(utils_1.SpeakeasyBase));
exports.PostSpacesIdCompanyEntitiesRequest = PostSpacesIdCompanyEntitiesRequest;
/**
 * Id of company entity created
 */
var PostSpacesIdCompanyEntities201ApplicationJSON = /** @class */ (function (_super) {
    __extends(PostSpacesIdCompanyEntities201ApplicationJSON, _super);
    function PostSpacesIdCompanyEntities201ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Id" }),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntities201ApplicationJSON.prototype, "id", void 0);
    return PostSpacesIdCompanyEntities201ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.PostSpacesIdCompanyEntities201ApplicationJSON = PostSpacesIdCompanyEntities201ApplicationJSON;
var PostSpacesIdCompanyEntitiesResponse = /** @class */ (function (_super) {
    __extends(PostSpacesIdCompanyEntitiesResponse, _super);
    function PostSpacesIdCompanyEntitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSpacesIdCompanyEntitiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostSpacesIdCompanyEntitiesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSpacesIdCompanyEntitiesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostSpacesIdCompanyEntitiesResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSpacesIdCompanyEntities201ApplicationJSON)
    ], PostSpacesIdCompanyEntitiesResponse.prototype, "postSpacesIdCompanyEntities201ApplicationJSONObject", void 0);
    return PostSpacesIdCompanyEntitiesResponse;
}(utils_1.SpeakeasyBase));
exports.PostSpacesIdCompanyEntitiesResponse = PostSpacesIdCompanyEntitiesResponse;
