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
exports.UpdateConfigurationSetEventDestinationResponse = exports.UpdateConfigurationSetEventDestinationRequest = exports.UpdateConfigurationSetEventDestinationRequestBody = exports.UpdateConfigurationSetEventDestinationRequestBodyEventDestination = exports.UpdateConfigurationSetEventDestinationHeaders = exports.UpdateConfigurationSetEventDestinationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateConfigurationSetEventDestinationPathParams = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationPathParams, _super);
    function UpdateConfigurationSetEventDestinationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationPathParams.prototype, "configurationSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=EventDestinationName" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationPathParams.prototype, "eventDestinationName", void 0);
    return UpdateConfigurationSetEventDestinationPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationPathParams = UpdateConfigurationSetEventDestinationPathParams;
var UpdateConfigurationSetEventDestinationHeaders = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationHeaders, _super);
    function UpdateConfigurationSetEventDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateConfigurationSetEventDestinationHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationHeaders = UpdateConfigurationSetEventDestinationHeaders;
// UpdateConfigurationSetEventDestinationRequestBodyEventDestination
/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
**/
var UpdateConfigurationSetEventDestinationRequestBodyEventDestination = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationRequestBodyEventDestination, _super);
    function UpdateConfigurationSetEventDestinationRequestBodyEventDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CloudWatchDestination" }),
        __metadata("design:type", shared.CloudWatchDestination)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "cloudWatchDestination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisFirehoseDestination" }),
        __metadata("design:type", shared.KinesisFirehoseDestination)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "kinesisFirehoseDestination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MatchingEventTypes" }),
        __metadata("design:type", Array)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "matchingEventTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PinpointDestination" }),
        __metadata("design:type", shared.PinpointDestination)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "pinpointDestination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SnsDestination" }),
        __metadata("design:type", shared.SnsDestination)
    ], UpdateConfigurationSetEventDestinationRequestBodyEventDestination.prototype, "snsDestination", void 0);
    return UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationRequestBodyEventDestination = UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
var UpdateConfigurationSetEventDestinationRequestBody = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationRequestBody, _super);
    function UpdateConfigurationSetEventDestinationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EventDestination" }),
        __metadata("design:type", UpdateConfigurationSetEventDestinationRequestBodyEventDestination)
    ], UpdateConfigurationSetEventDestinationRequestBody.prototype, "eventDestination", void 0);
    return UpdateConfigurationSetEventDestinationRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationRequestBody = UpdateConfigurationSetEventDestinationRequestBody;
var UpdateConfigurationSetEventDestinationRequest = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationRequest, _super);
    function UpdateConfigurationSetEventDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateConfigurationSetEventDestinationPathParams)
    ], UpdateConfigurationSetEventDestinationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateConfigurationSetEventDestinationHeaders)
    ], UpdateConfigurationSetEventDestinationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateConfigurationSetEventDestinationRequestBody)
    ], UpdateConfigurationSetEventDestinationRequest.prototype, "request", void 0);
    return UpdateConfigurationSetEventDestinationRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationRequest = UpdateConfigurationSetEventDestinationRequest;
var UpdateConfigurationSetEventDestinationResponse = /** @class */ (function (_super) {
    __extends(UpdateConfigurationSetEventDestinationResponse, _super);
    function UpdateConfigurationSetEventDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateConfigurationSetEventDestinationResponse.prototype, "updateConfigurationSetEventDestinationResponse", void 0);
    return UpdateConfigurationSetEventDestinationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateConfigurationSetEventDestinationResponse = UpdateConfigurationSetEventDestinationResponse;
