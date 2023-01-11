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
exports.ListSpeechSynthesisTasksResponse = exports.ListSpeechSynthesisTasksRequest = exports.ListSpeechSynthesisTasksHeaders = exports.ListSpeechSynthesisTasksQueryParams = exports.ListSpeechSynthesisTasksStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSpeechSynthesisTasksStatusEnum;
(function (ListSpeechSynthesisTasksStatusEnum) {
    ListSpeechSynthesisTasksStatusEnum["Scheduled"] = "scheduled";
    ListSpeechSynthesisTasksStatusEnum["InProgress"] = "inProgress";
    ListSpeechSynthesisTasksStatusEnum["Completed"] = "completed";
    ListSpeechSynthesisTasksStatusEnum["Failed"] = "failed";
})(ListSpeechSynthesisTasksStatusEnum = exports.ListSpeechSynthesisTasksStatusEnum || (exports.ListSpeechSynthesisTasksStatusEnum = {}));
var ListSpeechSynthesisTasksQueryParams = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksQueryParams, _super);
    function ListSpeechSynthesisTasksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksQueryParams.prototype, "status", void 0);
    return ListSpeechSynthesisTasksQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSpeechSynthesisTasksQueryParams = ListSpeechSynthesisTasksQueryParams;
var ListSpeechSynthesisTasksHeaders = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksHeaders, _super);
    function ListSpeechSynthesisTasksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSpeechSynthesisTasksHeaders;
}(utils_1.SpeakeasyBase));
exports.ListSpeechSynthesisTasksHeaders = ListSpeechSynthesisTasksHeaders;
var ListSpeechSynthesisTasksRequest = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksRequest, _super);
    function ListSpeechSynthesisTasksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSpeechSynthesisTasksQueryParams)
    ], ListSpeechSynthesisTasksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSpeechSynthesisTasksHeaders)
    ], ListSpeechSynthesisTasksRequest.prototype, "headers", void 0);
    return ListSpeechSynthesisTasksRequest;
}(utils_1.SpeakeasyBase));
exports.ListSpeechSynthesisTasksRequest = ListSpeechSynthesisTasksRequest;
var ListSpeechSynthesisTasksResponse = /** @class */ (function (_super) {
    __extends(ListSpeechSynthesisTasksResponse, _super);
    function ListSpeechSynthesisTasksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSpeechSynthesisTasksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListSpeechSynthesisTasksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListSpeechSynthesisTasksOutput)
    ], ListSpeechSynthesisTasksResponse.prototype, "listSpeechSynthesisTasksOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListSpeechSynthesisTasksResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSpeechSynthesisTasksResponse.prototype, "statusCode", void 0);
    return ListSpeechSynthesisTasksResponse;
}(utils_1.SpeakeasyBase));
exports.ListSpeechSynthesisTasksResponse = ListSpeechSynthesisTasksResponse;
