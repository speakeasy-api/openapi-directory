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
exports.RequestApiKeyResponse = exports.RequestApiKeyRequest = exports.RequestApiKeyRequestBody = exports.RequestApiKeyServerList = void 0;
var utils_1 = require("../../../internal/utils");
exports.RequestApiKeyServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var RequestApiKeyRequestBody = /** @class */ (function (_super) {
    __extends(RequestApiKeyRequestBody, _super);
    function RequestApiKeyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], RequestApiKeyRequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], RequestApiKeyRequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=email;" }),
        __metadata("design:type", String)
    ], RequestApiKeyRequestBody.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=password;" }),
        __metadata("design:type", Number)
    ], RequestApiKeyRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=userFirstName;" }),
        __metadata("design:type", String)
    ], RequestApiKeyRequestBody.prototype, "userFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=userLastName;" }),
        __metadata("design:type", String)
    ], RequestApiKeyRequestBody.prototype, "userLastName", void 0);
    return RequestApiKeyRequestBody;
}(utils_1.SpeakeasyBase));
exports.RequestApiKeyRequestBody = RequestApiKeyRequestBody;
var RequestApiKeyRequest = /** @class */ (function (_super) {
    __extends(RequestApiKeyRequest, _super);
    function RequestApiKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RequestApiKeyRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", RequestApiKeyRequestBody)
    ], RequestApiKeyRequest.prototype, "request", void 0);
    return RequestApiKeyRequest;
}(utils_1.SpeakeasyBase));
exports.RequestApiKeyRequest = RequestApiKeyRequest;
var RequestApiKeyResponse = /** @class */ (function (_super) {
    __extends(RequestApiKeyResponse, _super);
    function RequestApiKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RequestApiKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RequestApiKeyResponse.prototype, "statusCode", void 0);
    return RequestApiKeyResponse;
}(utils_1.SpeakeasyBase));
exports.RequestApiKeyResponse = RequestApiKeyResponse;
