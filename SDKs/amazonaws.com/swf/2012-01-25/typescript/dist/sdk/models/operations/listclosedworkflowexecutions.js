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
exports.ListClosedWorkflowExecutionsResponse = exports.ListClosedWorkflowExecutionsRequest = exports.ListClosedWorkflowExecutionsHeaders = exports.ListClosedWorkflowExecutionsXAmzTargetEnum = exports.ListClosedWorkflowExecutionsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListClosedWorkflowExecutionsQueryParams = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsQueryParams, _super);
    function ListClosedWorkflowExecutionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maximumPageSize" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsQueryParams.prototype, "maximumPageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextPageToken" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsQueryParams.prototype, "nextPageToken", void 0);
    return ListClosedWorkflowExecutionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListClosedWorkflowExecutionsQueryParams = ListClosedWorkflowExecutionsQueryParams;
var ListClosedWorkflowExecutionsXAmzTargetEnum;
(function (ListClosedWorkflowExecutionsXAmzTargetEnum) {
    ListClosedWorkflowExecutionsXAmzTargetEnum["SimpleWorkflowServiceListClosedWorkflowExecutions"] = "SimpleWorkflowService.ListClosedWorkflowExecutions";
})(ListClosedWorkflowExecutionsXAmzTargetEnum = exports.ListClosedWorkflowExecutionsXAmzTargetEnum || (exports.ListClosedWorkflowExecutionsXAmzTargetEnum = {}));
var ListClosedWorkflowExecutionsHeaders = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsHeaders, _super);
    function ListClosedWorkflowExecutionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsHeaders.prototype, "xAmzTarget", void 0);
    return ListClosedWorkflowExecutionsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListClosedWorkflowExecutionsHeaders = ListClosedWorkflowExecutionsHeaders;
var ListClosedWorkflowExecutionsRequest = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsRequest, _super);
    function ListClosedWorkflowExecutionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListClosedWorkflowExecutionsQueryParams)
    ], ListClosedWorkflowExecutionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListClosedWorkflowExecutionsHeaders)
    ], ListClosedWorkflowExecutionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListClosedWorkflowExecutionsInput)
    ], ListClosedWorkflowExecutionsRequest.prototype, "request", void 0);
    return ListClosedWorkflowExecutionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListClosedWorkflowExecutionsRequest = ListClosedWorkflowExecutionsRequest;
var ListClosedWorkflowExecutionsResponse = /** @class */ (function (_super) {
    __extends(ListClosedWorkflowExecutionsResponse, _super);
    function ListClosedWorkflowExecutionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListClosedWorkflowExecutionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListClosedWorkflowExecutionsResponse.prototype, "operationNotPermittedFault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListClosedWorkflowExecutionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListClosedWorkflowExecutionsResponse.prototype, "unknownResourceFault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.WorkflowExecutionInfos)
    ], ListClosedWorkflowExecutionsResponse.prototype, "workflowExecutionInfos", void 0);
    return ListClosedWorkflowExecutionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListClosedWorkflowExecutionsResponse = ListClosedWorkflowExecutionsResponse;
