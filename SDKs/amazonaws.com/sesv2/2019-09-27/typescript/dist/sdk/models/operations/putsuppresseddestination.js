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
exports.PutSuppressedDestinationResponse = exports.PutSuppressedDestinationRequest = exports.PutSuppressedDestinationRequestBody = exports.PutSuppressedDestinationRequestBodyReasonEnum = exports.PutSuppressedDestinationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var PutSuppressedDestinationHeaders = /** @class */ (function (_super) {
    __extends(PutSuppressedDestinationHeaders, _super);
    function PutSuppressedDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutSuppressedDestinationHeaders;
}(utils_1.SpeakeasyBase));
exports.PutSuppressedDestinationHeaders = PutSuppressedDestinationHeaders;
var PutSuppressedDestinationRequestBodyReasonEnum;
(function (PutSuppressedDestinationRequestBodyReasonEnum) {
    PutSuppressedDestinationRequestBodyReasonEnum["Bounce"] = "BOUNCE";
    PutSuppressedDestinationRequestBodyReasonEnum["Complaint"] = "COMPLAINT";
})(PutSuppressedDestinationRequestBodyReasonEnum = exports.PutSuppressedDestinationRequestBodyReasonEnum || (exports.PutSuppressedDestinationRequestBodyReasonEnum = {}));
var PutSuppressedDestinationRequestBody = /** @class */ (function (_super) {
    __extends(PutSuppressedDestinationRequestBody, _super);
    function PutSuppressedDestinationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationRequestBody.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Reason" }),
        __metadata("design:type", String)
    ], PutSuppressedDestinationRequestBody.prototype, "reason", void 0);
    return PutSuppressedDestinationRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutSuppressedDestinationRequestBody = PutSuppressedDestinationRequestBody;
var PutSuppressedDestinationRequest = /** @class */ (function (_super) {
    __extends(PutSuppressedDestinationRequest, _super);
    function PutSuppressedDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutSuppressedDestinationHeaders)
    ], PutSuppressedDestinationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutSuppressedDestinationRequestBody)
    ], PutSuppressedDestinationRequest.prototype, "request", void 0);
    return PutSuppressedDestinationRequest;
}(utils_1.SpeakeasyBase));
exports.PutSuppressedDestinationRequest = PutSuppressedDestinationRequest;
var PutSuppressedDestinationResponse = /** @class */ (function (_super) {
    __extends(PutSuppressedDestinationResponse, _super);
    function PutSuppressedDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSuppressedDestinationResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutSuppressedDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSuppressedDestinationResponse.prototype, "putSuppressedDestinationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutSuppressedDestinationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSuppressedDestinationResponse.prototype, "tooManyRequestsException", void 0);
    return PutSuppressedDestinationResponse;
}(utils_1.SpeakeasyBase));
exports.PutSuppressedDestinationResponse = PutSuppressedDestinationResponse;
