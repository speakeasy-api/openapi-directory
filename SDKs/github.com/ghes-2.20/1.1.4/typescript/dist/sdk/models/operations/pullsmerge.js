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
exports.PullsMergeResponse = exports.PullsMergeRequest = exports.PullsMerge409ApplicationJson = exports.PullsMerge405ApplicationJson = exports.PullsMergeRequestBody = exports.PullsMergeRequestBodyMergeMethodEnum = exports.PullsMergePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PullsMergePathParams = /** @class */ (function (_super) {
    __extends(PullsMergePathParams, _super);
    function PullsMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsMergePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsMergePathParams.prototype, "pullNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsMergePathParams.prototype, "repo", void 0);
    return PullsMergePathParams;
}(utils_1.SpeakeasyBase));
exports.PullsMergePathParams = PullsMergePathParams;
var PullsMergeRequestBodyMergeMethodEnum;
(function (PullsMergeRequestBodyMergeMethodEnum) {
    PullsMergeRequestBodyMergeMethodEnum["Merge"] = "merge";
    PullsMergeRequestBodyMergeMethodEnum["Squash"] = "squash";
    PullsMergeRequestBodyMergeMethodEnum["Rebase"] = "rebase";
})(PullsMergeRequestBodyMergeMethodEnum = exports.PullsMergeRequestBodyMergeMethodEnum || (exports.PullsMergeRequestBodyMergeMethodEnum = {}));
var PullsMergeRequestBody = /** @class */ (function (_super) {
    __extends(PullsMergeRequestBody, _super);
    function PullsMergeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit_message" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "commitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit_title" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "commitTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merge_method" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "mergeMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], PullsMergeRequestBody.prototype, "sha", void 0);
    return PullsMergeRequestBody;
}(utils_1.SpeakeasyBase));
exports.PullsMergeRequestBody = PullsMergeRequestBody;
var PullsMerge405ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsMerge405ApplicationJson, _super);
    function PullsMerge405ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsMerge405ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsMerge405ApplicationJson.prototype, "message", void 0);
    return PullsMerge405ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullsMerge405ApplicationJson = PullsMerge405ApplicationJson;
var PullsMerge409ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsMerge409ApplicationJson, _super);
    function PullsMerge409ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsMerge409ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsMerge409ApplicationJson.prototype, "message", void 0);
    return PullsMerge409ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullsMerge409ApplicationJson = PullsMerge409ApplicationJson;
var PullsMergeRequest = /** @class */ (function (_super) {
    __extends(PullsMergeRequest, _super);
    function PullsMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsMergePathParams)
    ], PullsMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsMergeRequestBody)
    ], PullsMergeRequest.prototype, "request", void 0);
    return PullsMergeRequest;
}(utils_1.SpeakeasyBase));
exports.PullsMergeRequest = PullsMergeRequest;
var PullsMergeResponse = /** @class */ (function (_super) {
    __extends(PullsMergeResponse, _super);
    function PullsMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PullsMergeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PullsMergeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], PullsMergeResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PullRequestMergeResult)
    ], PullsMergeResponse.prototype, "pullRequestMergeResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsMerge405ApplicationJson)
    ], PullsMergeResponse.prototype, "pullsMerge405ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsMerge409ApplicationJson)
    ], PullsMergeResponse.prototype, "pullsMerge409ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], PullsMergeResponse.prototype, "validationError", void 0);
    return PullsMergeResponse;
}(utils_1.SpeakeasyBase));
exports.PullsMergeResponse = PullsMergeResponse;
