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
exports.ListAllKeysResponse = exports.ListAllKeysRequest = exports.ListAllKeys401ApplicationJson = exports.ListAllKeys200ApplicationJson = exports.ListAllKeys200ApplicationJsonSshKeys = exports.ListAllKeys200ApplicationJsonMeta = exports.ListAllKeys200ApplicationJsonLinks = exports.ListAllKeys200ApplicationJsonLinksPages2 = exports.ListAllKeys200ApplicationJsonLinksPages1 = exports.ListAllKeysQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllKeysQueryParams = /** @class */ (function (_super) {
    __extends(ListAllKeysQueryParams, _super);
    function ListAllKeysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllKeysQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllKeysQueryParams.prototype, "perPage", void 0);
    return ListAllKeysQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllKeysQueryParams = ListAllKeysQueryParams;
var ListAllKeys200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJsonLinksPages1, _super);
    function ListAllKeys200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllKeys200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJsonLinksPages1 = ListAllKeys200ApplicationJsonLinksPages1;
var ListAllKeys200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJsonLinksPages2, _super);
    function ListAllKeys200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllKeys200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJsonLinksPages2 = ListAllKeys200ApplicationJsonLinksPages2;
var ListAllKeys200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJsonLinks, _super);
    function ListAllKeys200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllKeys200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllKeys200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJsonLinks = ListAllKeys200ApplicationJsonLinks;
// ListAllKeys200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllKeys200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJsonMeta, _super);
    function ListAllKeys200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllKeys200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllKeys200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJsonMeta = ListAllKeys200ApplicationJsonMeta;
var ListAllKeys200ApplicationJsonSshKeys = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJsonSshKeys, _super);
    function ListAllKeys200ApplicationJsonSshKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonSshKeys.prototype, "fingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllKeys200ApplicationJsonSshKeys.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonSshKeys.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], ListAllKeys200ApplicationJsonSshKeys.prototype, "publicKey", void 0);
    return ListAllKeys200ApplicationJsonSshKeys;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJsonSshKeys = ListAllKeys200ApplicationJsonSshKeys;
var ListAllKeys200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllKeys200ApplicationJson, _super);
    function ListAllKeys200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllKeys200ApplicationJsonLinks)
    ], ListAllKeys200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllKeys200ApplicationJsonMeta)
    ], ListAllKeys200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssh_keys", elemType: ListAllKeys200ApplicationJsonSshKeys }),
        __metadata("design:type", Array)
    ], ListAllKeys200ApplicationJson.prototype, "sshKeys", void 0);
    return ListAllKeys200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys200ApplicationJson = ListAllKeys200ApplicationJson;
var ListAllKeys401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllKeys401ApplicationJson, _super);
    function ListAllKeys401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllKeys401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllKeys401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllKeys401ApplicationJson.prototype, "requestId", void 0);
    return ListAllKeys401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllKeys401ApplicationJson = ListAllKeys401ApplicationJson;
var ListAllKeysRequest = /** @class */ (function (_super) {
    __extends(ListAllKeysRequest, _super);
    function ListAllKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKeysQueryParams)
    ], ListAllKeysRequest.prototype, "queryParams", void 0);
    return ListAllKeysRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllKeysRequest = ListAllKeysRequest;
var ListAllKeysResponse = /** @class */ (function (_super) {
    __extends(ListAllKeysResponse, _super);
    function ListAllKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllKeysResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKeys200ApplicationJson)
    ], ListAllKeysResponse.prototype, "listAllKeys200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllKeys401ApplicationJson)
    ], ListAllKeysResponse.prototype, "listAllKeys401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllKeysResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllKeysResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllKeysResponse = ListAllKeysResponse;
