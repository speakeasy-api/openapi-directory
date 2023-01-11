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
exports.ApiKeyOwnerResponse = exports.ApiKeyOwner200ApplicationJson = exports.ApiKeyOwner200ApplicationJsonUser = exports.ApiKeyOwner200ApplicationJsonOperations = void 0;
var utils_1 = require("../../../internal/utils");
var ApiKeyOwner200ApplicationJsonOperations = /** @class */ (function (_super) {
    __extends(ApiKeyOwner200ApplicationJsonOperations, _super);
    function ApiKeyOwner200ApplicationJsonOperations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], ApiKeyOwner200ApplicationJsonOperations.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonOperations.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=overage" }),
        __metadata("design:type", Number)
    ], ApiKeyOwner200ApplicationJsonOperations.prototype, "overage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], ApiKeyOwner200ApplicationJsonOperations.prototype, "usage", void 0);
    return ApiKeyOwner200ApplicationJsonOperations;
}(utils_1.SpeakeasyBase));
exports.ApiKeyOwner200ApplicationJsonOperations = ApiKeyOwner200ApplicationJsonOperations;
var ApiKeyOwner200ApplicationJsonUser = /** @class */ (function (_super) {
    __extends(ApiKeyOwner200ApplicationJsonUser, _super);
    function ApiKeyOwner200ApplicationJsonUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "avatar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPublic" }),
        __metadata("design:type", Boolean)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ApiKeyOwner200ApplicationJsonUser.prototype, "username", void 0);
    return ApiKeyOwner200ApplicationJsonUser;
}(utils_1.SpeakeasyBase));
exports.ApiKeyOwner200ApplicationJsonUser = ApiKeyOwner200ApplicationJsonUser;
var ApiKeyOwner200ApplicationJson = /** @class */ (function (_super) {
    __extends(ApiKeyOwner200ApplicationJson, _super);
    function ApiKeyOwner200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operations", elemType: ApiKeyOwner200ApplicationJsonOperations }),
        __metadata("design:type", Array)
    ], ApiKeyOwner200ApplicationJson.prototype, "operations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", ApiKeyOwner200ApplicationJsonUser)
    ], ApiKeyOwner200ApplicationJson.prototype, "user", void 0);
    return ApiKeyOwner200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ApiKeyOwner200ApplicationJson = ApiKeyOwner200ApplicationJson;
var ApiKeyOwnerResponse = /** @class */ (function (_super) {
    __extends(ApiKeyOwnerResponse, _super);
    function ApiKeyOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ApiKeyOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ApiKeyOwnerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ApiKeyOwner200ApplicationJson)
    ], ApiKeyOwnerResponse.prototype, "apiKeyOwner200ApplicationJSONObject", void 0);
    return ApiKeyOwnerResponse;
}(utils_1.SpeakeasyBase));
exports.ApiKeyOwnerResponse = ApiKeyOwnerResponse;
