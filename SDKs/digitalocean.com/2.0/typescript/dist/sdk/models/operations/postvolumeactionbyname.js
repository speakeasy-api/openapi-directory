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
exports.PostVolumeActionByNameResponse = exports.PostVolumeActionByNameRequest = exports.PostVolumeActionByName401ApplicationJson = exports.PostVolumeActionByNameRequestBody2 = exports.PostVolumeActionByNameRequestBody2TypeEnum = exports.PostVolumeActionByNameRequestBody1 = exports.PostVolumeActionByNameRequestBody1TypeEnum = exports.PostVolumeActionByNameQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostVolumeActionByNameQueryParams = /** @class */ (function (_super) {
    __extends(PostVolumeActionByNameQueryParams, _super);
    function PostVolumeActionByNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByNameQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByNameQueryParams.prototype, "perPage", void 0);
    return PostVolumeActionByNameQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByNameQueryParams = PostVolumeActionByNameQueryParams;
var PostVolumeActionByNameRequestBody1TypeEnum;
(function (PostVolumeActionByNameRequestBody1TypeEnum) {
    PostVolumeActionByNameRequestBody1TypeEnum["Attach"] = "attach";
    PostVolumeActionByNameRequestBody1TypeEnum["Detach"] = "detach";
    PostVolumeActionByNameRequestBody1TypeEnum["Resize"] = "resize";
})(PostVolumeActionByNameRequestBody1TypeEnum = exports.PostVolumeActionByNameRequestBody1TypeEnum || (exports.PostVolumeActionByNameRequestBody1TypeEnum = {}));
var PostVolumeActionByNameRequestBody1 = /** @class */ (function (_super) {
    __extends(PostVolumeActionByNameRequestBody1, _super);
    function PostVolumeActionByNameRequestBody1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_id" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByNameRequestBody1.prototype, "dropletId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostVolumeActionByNameRequestBody1.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], PostVolumeActionByNameRequestBody1.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumeActionByNameRequestBody1.prototype, "type", void 0);
    return PostVolumeActionByNameRequestBody1;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByNameRequestBody1 = PostVolumeActionByNameRequestBody1;
var PostVolumeActionByNameRequestBody2TypeEnum;
(function (PostVolumeActionByNameRequestBody2TypeEnum) {
    PostVolumeActionByNameRequestBody2TypeEnum["Attach"] = "attach";
    PostVolumeActionByNameRequestBody2TypeEnum["Detach"] = "detach";
    PostVolumeActionByNameRequestBody2TypeEnum["Resize"] = "resize";
})(PostVolumeActionByNameRequestBody2TypeEnum = exports.PostVolumeActionByNameRequestBody2TypeEnum || (exports.PostVolumeActionByNameRequestBody2TypeEnum = {}));
var PostVolumeActionByNameRequestBody2 = /** @class */ (function (_super) {
    __extends(PostVolumeActionByNameRequestBody2, _super);
    function PostVolumeActionByNameRequestBody2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet_id" }),
        __metadata("design:type", Number)
    ], PostVolumeActionByNameRequestBody2.prototype, "dropletId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PostVolumeActionByNameRequestBody2.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumeActionByNameRequestBody2.prototype, "type", void 0);
    return PostVolumeActionByNameRequestBody2;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByNameRequestBody2 = PostVolumeActionByNameRequestBody2;
var PostVolumeActionByName401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostVolumeActionByName401ApplicationJson, _super);
    function PostVolumeActionByName401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostVolumeActionByName401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumeActionByName401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], PostVolumeActionByName401ApplicationJson.prototype, "requestId", void 0);
    return PostVolumeActionByName401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByName401ApplicationJson = PostVolumeActionByName401ApplicationJson;
var PostVolumeActionByNameRequest = /** @class */ (function (_super) {
    __extends(PostVolumeActionByNameRequest, _super);
    function PostVolumeActionByNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumeActionByNameQueryParams)
    ], PostVolumeActionByNameRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostVolumeActionByNameRequest.prototype, "request", void 0);
    return PostVolumeActionByNameRequest;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByNameRequest = PostVolumeActionByNameRequest;
var PostVolumeActionByNameResponse = /** @class */ (function (_super) {
    __extends(PostVolumeActionByNameResponse, _super);
    function PostVolumeActionByNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostVolumeActionByNameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostVolumeActionByNameResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostVolumeActionByNameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostVolumeActionByNameResponse.prototype, "postVolumeActionByName202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostVolumeActionByName401ApplicationJson)
    ], PostVolumeActionByNameResponse.prototype, "postVolumeActionByName401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], PostVolumeActionByNameResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return PostVolumeActionByNameResponse;
}(utils_1.SpeakeasyBase));
exports.PostVolumeActionByNameResponse = PostVolumeActionByNameResponse;
