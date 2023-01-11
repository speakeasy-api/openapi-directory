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
exports.DeleteCollectionResponse = exports.DeleteCollectionRequest = exports.DeleteCollection404ApplicationJson = exports.DeleteCollection404ApplicationJsonError = exports.DeleteCollection404ApplicationJsonErrorDetails = exports.DeleteCollection200ApplicationJson = exports.DeleteCollection200ApplicationJsonCollection = exports.DeleteCollectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteCollectionPathParams = /** @class */ (function (_super) {
    __extends(DeleteCollectionPathParams, _super);
    function DeleteCollectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=collection_uid" }),
        __metadata("design:type", String)
    ], DeleteCollectionPathParams.prototype, "collectionUid", void 0);
    return DeleteCollectionPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteCollectionPathParams = DeleteCollectionPathParams;
var DeleteCollection200ApplicationJsonCollection = /** @class */ (function (_super) {
    __extends(DeleteCollection200ApplicationJsonCollection, _super);
    function DeleteCollection200ApplicationJsonCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteCollection200ApplicationJsonCollection.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DeleteCollection200ApplicationJsonCollection.prototype, "uid", void 0);
    return DeleteCollection200ApplicationJsonCollection;
}(utils_1.SpeakeasyBase));
exports.DeleteCollection200ApplicationJsonCollection = DeleteCollection200ApplicationJsonCollection;
var DeleteCollection200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCollection200ApplicationJson, _super);
    function DeleteCollection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection" }),
        __metadata("design:type", DeleteCollection200ApplicationJsonCollection)
    ], DeleteCollection200ApplicationJson.prototype, "collection", void 0);
    return DeleteCollection200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteCollection200ApplicationJson = DeleteCollection200ApplicationJson;
var DeleteCollection404ApplicationJsonErrorDetails = /** @class */ (function (_super) {
    __extends(DeleteCollection404ApplicationJsonErrorDetails, _super);
    function DeleteCollection404ApplicationJsonErrorDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteCollection404ApplicationJsonErrorDetails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item" }),
        __metadata("design:type", String)
    ], DeleteCollection404ApplicationJsonErrorDetails.prototype, "item", void 0);
    return DeleteCollection404ApplicationJsonErrorDetails;
}(utils_1.SpeakeasyBase));
exports.DeleteCollection404ApplicationJsonErrorDetails = DeleteCollection404ApplicationJsonErrorDetails;
var DeleteCollection404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(DeleteCollection404ApplicationJsonError, _super);
    function DeleteCollection404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", DeleteCollection404ApplicationJsonErrorDetails)
    ], DeleteCollection404ApplicationJsonError.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteCollection404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeleteCollection404ApplicationJsonError.prototype, "name", void 0);
    return DeleteCollection404ApplicationJsonError;
}(utils_1.SpeakeasyBase));
exports.DeleteCollection404ApplicationJsonError = DeleteCollection404ApplicationJsonError;
var DeleteCollection404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCollection404ApplicationJson, _super);
    function DeleteCollection404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", DeleteCollection404ApplicationJsonError)
    ], DeleteCollection404ApplicationJson.prototype, "error", void 0);
    return DeleteCollection404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteCollection404ApplicationJson = DeleteCollection404ApplicationJson;
var DeleteCollectionRequest = /** @class */ (function (_super) {
    __extends(DeleteCollectionRequest, _super);
    function DeleteCollectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCollectionPathParams)
    ], DeleteCollectionRequest.prototype, "pathParams", void 0);
    return DeleteCollectionRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteCollectionRequest = DeleteCollectionRequest;
var DeleteCollectionResponse = /** @class */ (function (_super) {
    __extends(DeleteCollectionResponse, _super);
    function DeleteCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteCollectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteCollectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCollection200ApplicationJson)
    ], DeleteCollectionResponse.prototype, "deleteCollection200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteCollection404ApplicationJson)
    ], DeleteCollectionResponse.prototype, "deleteCollection404ApplicationJSONObject", void 0);
    return DeleteCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteCollectionResponse = DeleteCollectionResponse;
