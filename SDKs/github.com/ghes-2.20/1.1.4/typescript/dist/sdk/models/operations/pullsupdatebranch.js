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
exports.PullsUpdateBranchResponse = exports.PullsUpdateBranchRequest = exports.PullsUpdateBranch415ApplicationJson = exports.PullsUpdateBranch202ApplicationJson = exports.PullsUpdateBranchRequestBody = exports.PullsUpdateBranchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PullsUpdateBranchPathParams = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchPathParams, _super);
    function PullsUpdateBranchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pull_number" }),
        __metadata("design:type", Number)
    ], PullsUpdateBranchPathParams.prototype, "pullNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchPathParams.prototype, "repo", void 0);
    return PullsUpdateBranchPathParams;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranchPathParams = PullsUpdateBranchPathParams;
var PullsUpdateBranchRequestBody = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchRequestBody, _super);
    function PullsUpdateBranchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expected_head_sha" }),
        __metadata("design:type", String)
    ], PullsUpdateBranchRequestBody.prototype, "expectedHeadSha", void 0);
    return PullsUpdateBranchRequestBody;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranchRequestBody = PullsUpdateBranchRequestBody;
var PullsUpdateBranch202ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsUpdateBranch202ApplicationJson, _super);
    function PullsUpdateBranch202ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch202ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch202ApplicationJson.prototype, "url", void 0);
    return PullsUpdateBranch202ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranch202ApplicationJson = PullsUpdateBranch202ApplicationJson;
var PullsUpdateBranch415ApplicationJson = /** @class */ (function (_super) {
    __extends(PullsUpdateBranch415ApplicationJson, _super);
    function PullsUpdateBranch415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PullsUpdateBranch415ApplicationJson.prototype, "message", void 0);
    return PullsUpdateBranch415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranch415ApplicationJson = PullsUpdateBranch415ApplicationJson;
var PullsUpdateBranchRequest = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchRequest, _super);
    function PullsUpdateBranchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsUpdateBranchPathParams)
    ], PullsUpdateBranchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsUpdateBranchRequestBody)
    ], PullsUpdateBranchRequest.prototype, "request", void 0);
    return PullsUpdateBranchRequest;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranchRequest = PullsUpdateBranchRequest;
var PullsUpdateBranchResponse = /** @class */ (function (_super) {
    __extends(PullsUpdateBranchResponse, _super);
    function PullsUpdateBranchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PullsUpdateBranchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PullsUpdateBranchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], PullsUpdateBranchResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsUpdateBranch202ApplicationJson)
    ], PullsUpdateBranchResponse.prototype, "pullsUpdateBranch202ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PullsUpdateBranch415ApplicationJson)
    ], PullsUpdateBranchResponse.prototype, "pullsUpdateBranch415ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], PullsUpdateBranchResponse.prototype, "validationError", void 0);
    return PullsUpdateBranchResponse;
}(utils_1.SpeakeasyBase));
exports.PullsUpdateBranchResponse = PullsUpdateBranchResponse;
