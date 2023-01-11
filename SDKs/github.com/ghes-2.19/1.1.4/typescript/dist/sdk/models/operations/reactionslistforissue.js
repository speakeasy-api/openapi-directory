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
exports.ReactionsListForIssueResponse = exports.ReactionsListForIssueRequest = exports.ReactionsListForIssue415ApplicationJson = exports.ReactionsListForIssueQueryParams = exports.ReactionsListForIssuePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReactionsListForIssuePathParams = /** @class */ (function (_super) {
    __extends(ReactionsListForIssuePathParams, _super);
    function ReactionsListForIssuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=issue_number" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssuePathParams.prototype, "issueNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReactionsListForIssuePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReactionsListForIssuePathParams.prototype, "repo", void 0);
    return ReactionsListForIssuePathParams;
}(utils_1.SpeakeasyBase));
exports.ReactionsListForIssuePathParams = ReactionsListForIssuePathParams;
var ReactionsListForIssueQueryParams = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueQueryParams, _super);
    function ReactionsListForIssueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], ReactionsListForIssueQueryParams.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssueQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ReactionsListForIssueQueryParams.prototype, "perPage", void 0);
    return ReactionsListForIssueQueryParams;
}(utils_1.SpeakeasyBase));
exports.ReactionsListForIssueQueryParams = ReactionsListForIssueQueryParams;
var ReactionsListForIssue415ApplicationJson = /** @class */ (function (_super) {
    __extends(ReactionsListForIssue415ApplicationJson, _super);
    function ReactionsListForIssue415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReactionsListForIssue415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReactionsListForIssue415ApplicationJson.prototype, "message", void 0);
    return ReactionsListForIssue415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReactionsListForIssue415ApplicationJson = ReactionsListForIssue415ApplicationJson;
var ReactionsListForIssueRequest = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueRequest, _super);
    function ReactionsListForIssueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsListForIssuePathParams)
    ], ReactionsListForIssueRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsListForIssueQueryParams)
    ], ReactionsListForIssueRequest.prototype, "queryParams", void 0);
    return ReactionsListForIssueRequest;
}(utils_1.SpeakeasyBase));
exports.ReactionsListForIssueRequest = ReactionsListForIssueRequest;
var ReactionsListForIssueResponse = /** @class */ (function (_super) {
    __extends(ReactionsListForIssueResponse, _super);
    function ReactionsListForIssueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReactionsListForIssueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReactionsListForIssueResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReactionsListForIssueResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReactionsListForIssueResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Reaction }),
        __metadata("design:type", Array)
    ], ReactionsListForIssueResponse.prototype, "reactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsListForIssue415ApplicationJson)
    ], ReactionsListForIssueResponse.prototype, "reactionsListForIssue415ApplicationJSONObject", void 0);
    return ReactionsListForIssueResponse;
}(utils_1.SpeakeasyBase));
exports.ReactionsListForIssueResponse = ReactionsListForIssueResponse;
