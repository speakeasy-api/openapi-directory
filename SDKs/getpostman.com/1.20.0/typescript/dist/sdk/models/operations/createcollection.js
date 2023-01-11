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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCollectionResponse = exports.CreateCollectionRequest = exports.CreateCollection400ApplicationJson = exports.CreateCollection400ApplicationJsonError = exports.CreateCollection200ApplicationJson = exports.CreateCollection200ApplicationJsonCollection = exports.CreateCollectionRequestBody = exports.CreateCollectionRequestBodyCollection = exports.CreateCollectionRequestBodyCollectionItem = exports.CreateCollectionRequestBodyCollectionItemItem = exports.CreateCollectionRequestBodyCollectionItemItemRequest = exports.CreateCollectionRequestBodyCollectionItemItemRequestHeader = exports.CreateCollectionRequestBodyCollectionItemItemRequestBody = exports.CreateCollectionRequestBodyCollectionInfo = void 0;
var utils_1 = require("../../../internal/utils");
var CreateCollectionRequestBodyCollectionInfo = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionInfo, _super);
    function CreateCollectionRequestBodyCollectionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionInfo.prototype, "schema", void 0);
    return CreateCollectionRequestBodyCollectionInfo;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionInfo = CreateCollectionRequestBodyCollectionInfo;
var CreateCollectionRequestBodyCollectionItemItemRequestBody = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequestBody, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=raw" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestBody.prototype, "raw", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionItemItemRequestBody = CreateCollectionRequestBodyCollectionItemItemRequestBody;
var CreateCollectionRequestBodyCollectionItemItemRequestHeader = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequestHeader, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequestHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequestHeader.prototype, "value", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequestHeader;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionItemItemRequestHeader = CreateCollectionRequestBodyCollectionItemItemRequestHeader;
var CreateCollectionRequestBodyCollectionItemItemRequest = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItemRequest, _super);
    function CreateCollectionRequestBodyCollectionItemItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=body" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionItemItemRequestBody)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header", elemType: CreateCollectionRequestBodyCollectionItemItemRequestHeader }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "header", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItemRequest.prototype, "url", void 0);
    return CreateCollectionRequestBodyCollectionItemItemRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionItemItemRequest = CreateCollectionRequestBodyCollectionItemItemRequest;
var CreateCollectionRequestBodyCollectionItemItem = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItemItem, _super);
    function CreateCollectionRequestBodyCollectionItemItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItemItem.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionItemItemRequest)
    ], CreateCollectionRequestBodyCollectionItemItem.prototype, "request", void 0);
    return CreateCollectionRequestBodyCollectionItemItem;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionItemItem = CreateCollectionRequestBodyCollectionItemItem;
var CreateCollectionRequestBodyCollectionItem = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollectionItem, _super);
    function CreateCollectionRequestBodyCollectionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItemItem }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollectionItem.prototype, "item", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollectionRequestBodyCollectionItem.prototype, "name", void 0);
    return CreateCollectionRequestBodyCollectionItem;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollectionItem = CreateCollectionRequestBodyCollectionItem;
var CreateCollectionRequestBodyCollection = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBodyCollection, _super);
    function CreateCollectionRequestBodyCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", CreateCollectionRequestBodyCollectionInfo)
    ], CreateCollectionRequestBodyCollection.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item", elemType: CreateCollectionRequestBodyCollectionItem }),
        __metadata("design:type", Array)
    ], CreateCollectionRequestBodyCollection.prototype, "item", void 0);
    return CreateCollectionRequestBodyCollection;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBodyCollection = CreateCollectionRequestBodyCollection;
var CreateCollectionRequestBody = /** @class */ (function (_super) {
    __extends(CreateCollectionRequestBody, _super);
    function CreateCollectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection" }),
        __metadata("design:type", CreateCollectionRequestBodyCollection)
    ], CreateCollectionRequestBody.prototype, "collection", void 0);
    return CreateCollectionRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequestBody = CreateCollectionRequestBody;
var CreateCollection200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(CreateCollection200ApplicationJsonCollection, _super);
    function CreateCollection200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], CreateCollection200ApplicationJsonCollection.prototype, "uid", void 0);
    return CreateCollection200ApplicationJsonCollection;
}(utils_1.SpeakeasyBase));
exports.CreateCollection200ApplicationJsonCollection = CreateCollection200ApplicationJsonCollection;
var CreateCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCollection200ApplicationJson, _super);
    function CreateCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection" }),
        __metadata("design:type", CreateCollection200ApplicationJsonCollection)
    ], CreateCollection200ApplicationJson.prototype, "collection", void 0);
    return CreateCollection200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCollection200ApplicationJson = CreateCollection200ApplicationJson;
var CreateCollection400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(CreateCollection400ApplicationJsonError, _super);
    function CreateCollection400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateCollection400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateCollection400ApplicationJsonError.prototype, "name", void 0);
    return CreateCollection400ApplicationJsonError;
}(utils_1.SpeakeasyBase));
exports.CreateCollection400ApplicationJsonError = CreateCollection400ApplicationJsonError;
var CreateCollection400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCollection400ApplicationJson, _super);
    function CreateCollection400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", CreateCollection400ApplicationJsonError)
    ], CreateCollection400ApplicationJson.prototype, "error", void 0);
    return CreateCollection400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateCollection400ApplicationJson = CreateCollection400ApplicationJson;
var CreateCollectionRequest = /** @class */ (function (_super) {
    __extends(CreateCollectionRequest, _super);
    function CreateCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCollectionRequestBody)
    ], CreateCollectionRequest.prototype, "request", void 0);
    return CreateCollectionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionRequest = CreateCollectionRequest;
var CreateCollectionResponse = /** @class */ (function (_super) {
    __extends(CreateCollectionResponse, _super);
    function CreateCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCollection200ApplicationJson)
    ], CreateCollectionResponse.prototype, "createCollection200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCollection400ApplicationJson)
    ], CreateCollectionResponse.prototype, "createCollection400ApplicationJSONObject", void 0);
    return CreateCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCollectionResponse = CreateCollectionResponse;
