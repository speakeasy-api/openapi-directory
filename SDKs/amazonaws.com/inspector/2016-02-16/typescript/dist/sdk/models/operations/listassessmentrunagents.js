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
exports.ListAssessmentRunAgentsResponse = exports.ListAssessmentRunAgentsRequest = exports.ListAssessmentRunAgentsHeaders = exports.ListAssessmentRunAgentsXAmzTargetEnum = exports.ListAssessmentRunAgentsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAssessmentRunAgentsQueryParams = /** @class */ (function (_super) {
    __extends(ListAssessmentRunAgentsQueryParams, _super);
    function ListAssessmentRunAgentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsQueryParams.prototype, "nextToken", void 0);
    return ListAssessmentRunAgentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAssessmentRunAgentsQueryParams = ListAssessmentRunAgentsQueryParams;
var ListAssessmentRunAgentsXAmzTargetEnum;
(function (ListAssessmentRunAgentsXAmzTargetEnum) {
    ListAssessmentRunAgentsXAmzTargetEnum["InspectorServiceListAssessmentRunAgents"] = "InspectorService.ListAssessmentRunAgents";
})(ListAssessmentRunAgentsXAmzTargetEnum = exports.ListAssessmentRunAgentsXAmzTargetEnum || (exports.ListAssessmentRunAgentsXAmzTargetEnum = {}));
var ListAssessmentRunAgentsHeaders = /** @class */ (function (_super) {
    __extends(ListAssessmentRunAgentsHeaders, _super);
    function ListAssessmentRunAgentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsHeaders.prototype, "xAmzTarget", void 0);
    return ListAssessmentRunAgentsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListAssessmentRunAgentsHeaders = ListAssessmentRunAgentsHeaders;
var ListAssessmentRunAgentsRequest = /** @class */ (function (_super) {
    __extends(ListAssessmentRunAgentsRequest, _super);
    function ListAssessmentRunAgentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssessmentRunAgentsQueryParams)
    ], ListAssessmentRunAgentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssessmentRunAgentsHeaders)
    ], ListAssessmentRunAgentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListAssessmentRunAgentsRequest)
    ], ListAssessmentRunAgentsRequest.prototype, "request", void 0);
    return ListAssessmentRunAgentsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAssessmentRunAgentsRequest = ListAssessmentRunAgentsRequest;
var ListAssessmentRunAgentsResponse = /** @class */ (function (_super) {
    __extends(ListAssessmentRunAgentsResponse, _super);
    function ListAssessmentRunAgentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssessmentRunAgentsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAssessmentRunAgentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssessmentRunAgentsResponse.prototype, "internalException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssessmentRunAgentsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListAssessmentRunAgentsResponse)
    ], ListAssessmentRunAgentsResponse.prototype, "listAssessmentRunAgentsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssessmentRunAgentsResponse.prototype, "noSuchEntityException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAssessmentRunAgentsResponse.prototype, "statusCode", void 0);
    return ListAssessmentRunAgentsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAssessmentRunAgentsResponse = ListAssessmentRunAgentsResponse;
