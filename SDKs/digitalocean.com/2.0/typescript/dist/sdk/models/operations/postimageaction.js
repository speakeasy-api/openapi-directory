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
exports.PostImageActionResponse = exports.PostImageActionRequest = exports.PostImageAction401ApplicationJson = exports.PostImageActionRequestBody2 = exports.PostImageActionRequestBody2TypeEnum = exports.PostImageActionRequestBody1 = exports.PostImageActionRequestBody1TypeEnum = exports.PostImageActionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostImageActionPathParams = /** @class */ (function (_super) {
    __extends(PostImageActionPathParams, _super);
    function PostImageActionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=image_id" }),
        __metadata("design:type", Number)
    ], PostImageActionPathParams.prototype, "imageId", void 0);
    return PostImageActionPathParams;
}(utils_1.SpeakeasyBase));
exports.PostImageActionPathParams = PostImageActionPathParams;
var PostImageActionRequestBody1TypeEnum;
(function (PostImageActionRequestBody1TypeEnum) {
    PostImageActionRequestBody1TypeEnum["Convert"] = "convert";
    PostImageActionRequestBody1TypeEnum["Transfer"] = "transfer";
})(PostImageActionRequestBody1TypeEnum = exports.PostImageActionRequestBody1TypeEnum || (exports.PostImageActionRequestBody1TypeEnum = {}));
var PostImageActionRequestBody1 = /** @class */ (function (_super) {
    __extends(PostImageActionRequestBody1, _super);
    function PostImageActionRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostImageActionRequestBody1.prototype, "type", void 0);
    return PostImageActionRequestBody1;
}(utils_1.SpeakeasyBase));
exports.PostImageActionRequestBody1 = PostImageActionRequestBody1;
var PostImageActionRequestBody2TypeEnum;
(function (PostImageActionRequestBody2TypeEnum) {
    PostImageActionRequestBody2TypeEnum["Convert"] = "convert";
    PostImageActionRequestBody2TypeEnum["Transfer"] = "transfer";
})(PostImageActionRequestBody2TypeEnum = exports.PostImageActionRequestBody2TypeEnum || (exports.PostImageActionRequestBody2TypeEnum = {}));
var PostImageActionRequestBody2 = /** @class */ (function (_super) {
    __extends(PostImageActionRequestBody2, _super);
    function PostImageActionRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostImageActionRequestBody2.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostImageActionRequestBody2.prototype, "type", void 0);
    return PostImageActionRequestBody2;
}(utils_1.SpeakeasyBase));
exports.PostImageActionRequestBody2 = PostImageActionRequestBody2;
var PostImageAction401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostImageAction401ApplicationJson, _super);
    function PostImageAction401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostImageAction401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostImageAction401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PostImageAction401ApplicationJson.prototype, "requestId", void 0);
    return PostImageAction401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostImageAction401ApplicationJson = PostImageAction401ApplicationJson;
var PostImageActionRequest = /** @class */ (function (_super) {
    __extends(PostImageActionRequest, _super);
    function PostImageActionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostImageActionPathParams)
    ], PostImageActionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostImageActionRequest.prototype, "request", void 0);
    return PostImageActionRequest;
}(utils_1.SpeakeasyBase));
exports.PostImageActionRequest = PostImageActionRequest;
var PostImageActionResponse = /** @class */ (function (_super) {
    __extends(PostImageActionResponse, _super);
    function PostImageActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostImageActionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostImageActionResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostImageActionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostImageAction401ApplicationJson)
    ], PostImageActionResponse.prototype, "postImageAction401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PostImageActionResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems)
    ], PostImageActionResponse.prototype, "onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems", void 0);
    return PostImageActionResponse;
}(utils_1.SpeakeasyBase));
exports.PostImageActionResponse = PostImageActionResponse;
