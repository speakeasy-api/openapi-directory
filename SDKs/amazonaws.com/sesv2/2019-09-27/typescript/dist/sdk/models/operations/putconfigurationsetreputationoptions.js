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
exports.PutConfigurationSetReputationOptionsResponse = exports.PutConfigurationSetReputationOptionsRequest = exports.PutConfigurationSetReputationOptionsRequestBody = exports.PutConfigurationSetReputationOptionsHeaders = exports.PutConfigurationSetReputationOptionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PutConfigurationSetReputationOptionsPathParams = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsPathParams, _super);
    function PutConfigurationSetReputationOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsPathParams.prototype, "configurationSetName", void 0);
    return PutConfigurationSetReputationOptionsPathParams;
}(utils_1.SpeakeasyBase));
exports.PutConfigurationSetReputationOptionsPathParams = PutConfigurationSetReputationOptionsPathParams;
var PutConfigurationSetReputationOptionsHeaders = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsHeaders, _super);
    function PutConfigurationSetReputationOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutConfigurationSetReputationOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PutConfigurationSetReputationOptionsHeaders = PutConfigurationSetReputationOptionsHeaders;
var PutConfigurationSetReputationOptionsRequestBody = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsRequestBody, _super);
    function PutConfigurationSetReputationOptionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReputationMetricsEnabled" }),
        __metadata("design:type", Boolean)
    ], PutConfigurationSetReputationOptionsRequestBody.prototype, "reputationMetricsEnabled", void 0);
    return PutConfigurationSetReputationOptionsRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutConfigurationSetReputationOptionsRequestBody = PutConfigurationSetReputationOptionsRequestBody;
var PutConfigurationSetReputationOptionsRequest = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsRequest, _super);
    function PutConfigurationSetReputationOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutConfigurationSetReputationOptionsPathParams)
    ], PutConfigurationSetReputationOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutConfigurationSetReputationOptionsHeaders)
    ], PutConfigurationSetReputationOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutConfigurationSetReputationOptionsRequestBody)
    ], PutConfigurationSetReputationOptionsRequest.prototype, "request", void 0);
    return PutConfigurationSetReputationOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PutConfigurationSetReputationOptionsRequest = PutConfigurationSetReputationOptionsRequest;
var PutConfigurationSetReputationOptionsResponse = /** @class */ (function (_super) {
    __extends(PutConfigurationSetReputationOptionsResponse, _super);
    function PutConfigurationSetReputationOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "putConfigurationSetReputationOptionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutConfigurationSetReputationOptionsResponse.prototype, "tooManyRequestsException", void 0);
    return PutConfigurationSetReputationOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PutConfigurationSetReputationOptionsResponse = PutConfigurationSetReputationOptionsResponse;
