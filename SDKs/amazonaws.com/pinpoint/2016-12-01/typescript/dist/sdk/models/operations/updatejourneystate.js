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
exports.UpdateJourneyStateResponse = exports.UpdateJourneyStateRequest = exports.UpdateJourneyStateRequestBody = exports.UpdateJourneyStateRequestBodyJourneyStateRequest = exports.UpdateJourneyStateHeaders = exports.UpdateJourneyStatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateJourneyStatePathParams = /** @class */ (function (_super) {
    __extends(UpdateJourneyStatePathParams, _super);
    function UpdateJourneyStatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateJourneyStatePathParams.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=journey-id" }),
        __metadata("design:type", String)
    ], UpdateJourneyStatePathParams.prototype, "journeyId", void 0);
    return UpdateJourneyStatePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStatePathParams = UpdateJourneyStatePathParams;
var UpdateJourneyStateHeaders = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateHeaders, _super);
    function UpdateJourneyStateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateJourneyStateHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStateHeaders = UpdateJourneyStateHeaders;
// UpdateJourneyStateRequestBodyJourneyStateRequest
/**
 * Changes the status of a journey.
**/
var UpdateJourneyStateRequestBodyJourneyStateRequest = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateRequestBodyJourneyStateRequest, _super);
    function UpdateJourneyStateRequestBodyJourneyStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], UpdateJourneyStateRequestBodyJourneyStateRequest.prototype, "state", void 0);
    return UpdateJourneyStateRequestBodyJourneyStateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStateRequestBodyJourneyStateRequest = UpdateJourneyStateRequestBodyJourneyStateRequest;
var UpdateJourneyStateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateRequestBody, _super);
    function UpdateJourneyStateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JourneyStateRequest" }),
        __metadata("design:type", UpdateJourneyStateRequestBodyJourneyStateRequest)
    ], UpdateJourneyStateRequestBody.prototype, "journeyStateRequest", void 0);
    return UpdateJourneyStateRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStateRequestBody = UpdateJourneyStateRequestBody;
var UpdateJourneyStateRequest = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateRequest, _super);
    function UpdateJourneyStateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateJourneyStatePathParams)
    ], UpdateJourneyStateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateJourneyStateHeaders)
    ], UpdateJourneyStateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateJourneyStateRequestBody)
    ], UpdateJourneyStateRequest.prototype, "request", void 0);
    return UpdateJourneyStateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStateRequest = UpdateJourneyStateRequest;
var UpdateJourneyStateResponse = /** @class */ (function (_super) {
    __extends(UpdateJourneyStateResponse, _super);
    function UpdateJourneyStateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateJourneyStateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateJourneyStateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateJourneyStateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateJourneyStateResponse)
    ], UpdateJourneyStateResponse.prototype, "updateJourneyStateResponse", void 0);
    return UpdateJourneyStateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateJourneyStateResponse = UpdateJourneyStateResponse;
