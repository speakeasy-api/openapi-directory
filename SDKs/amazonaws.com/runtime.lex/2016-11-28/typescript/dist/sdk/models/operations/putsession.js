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
exports.PutSessionResponse = exports.PutSessionRequest = exports.PutSessionRequestBody = exports.PutSessionRequestBodyDialogAction = exports.PutSessionHeaders = exports.PutSessionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutSessionPathParams = /** @class */ (function (_super) {
    __extends(PutSessionPathParams, _super);
    function PutSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botAlias" }),
        __metadata("design:type", String)
    ], PutSessionPathParams.prototype, "botAlias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botName" }),
        __metadata("design:type", String)
    ], PutSessionPathParams.prototype, "botName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], PutSessionPathParams.prototype, "userId", void 0);
    return PutSessionPathParams;
}(utils_1.SpeakeasyBase));
exports.PutSessionPathParams = PutSessionPathParams;
var PutSessionHeaders = /** @class */ (function (_super) {
    __extends(PutSessionHeaders, _super);
    function PutSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "accept", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutSessionHeaders;
}(utils_1.SpeakeasyBase));
exports.PutSessionHeaders = PutSessionHeaders;
// PutSessionRequestBodyDialogAction
/**
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
var PutSessionRequestBodyDialogAction = /** @class */ (function (_super) {
    __extends(PutSessionRequestBodyDialogAction, _super);
    function PutSessionRequestBodyDialogAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fulfillmentState" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "fulfillmentState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentName" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "intentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messageFormat" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "messageFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slotToElicit" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "slotToElicit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slots" }),
        __metadata("design:type", Object)
    ], PutSessionRequestBodyDialogAction.prototype, "slots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutSessionRequestBodyDialogAction.prototype, "type", void 0);
    return PutSessionRequestBodyDialogAction;
}(utils_1.SpeakeasyBase));
exports.PutSessionRequestBodyDialogAction = PutSessionRequestBodyDialogAction;
var PutSessionRequestBody = /** @class */ (function (_super) {
    __extends(PutSessionRequestBody, _super);
    function PutSessionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeContexts", elemType: shared.ActiveContext }),
        __metadata("design:type", Array)
    ], PutSessionRequestBody.prototype, "activeContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dialogAction" }),
        __metadata("design:type", PutSessionRequestBodyDialogAction)
    ], PutSessionRequestBody.prototype, "dialogAction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recentIntentSummaryView", elemType: shared.IntentSummary }),
        __metadata("design:type", Array)
    ], PutSessionRequestBody.prototype, "recentIntentSummaryView", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionAttributes" }),
        __metadata("design:type", Object)
    ], PutSessionRequestBody.prototype, "sessionAttributes", void 0);
    return PutSessionRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutSessionRequestBody = PutSessionRequestBody;
var PutSessionRequest = /** @class */ (function (_super) {
    __extends(PutSessionRequest, _super);
    function PutSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutSessionPathParams)
    ], PutSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutSessionHeaders)
    ], PutSessionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutSessionRequestBody)
    ], PutSessionRequest.prototype, "request", void 0);
    return PutSessionRequest;
}(utils_1.SpeakeasyBase));
exports.PutSessionRequest = PutSessionRequest;
var PutSessionResponse = /** @class */ (function (_super) {
    __extends(PutSessionResponse, _super);
    function PutSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "badGatewayException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutSessionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "dependencyFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "notAcceptableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutSessionResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PutSessionResponse)
    ], PutSessionResponse.prototype, "putSessionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutSessionResponse.prototype, "statusCode", void 0);
    return PutSessionResponse;
}(utils_1.SpeakeasyBase));
exports.PutSessionResponse = PutSessionResponse;
