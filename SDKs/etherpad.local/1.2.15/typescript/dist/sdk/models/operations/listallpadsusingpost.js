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
exports.ListAllPadsUsingPostResponse = exports.ListAllPadsUsingPost500ApplicationJson = exports.ListAllPadsUsingPost401ApplicationJson = exports.ListAllPadsUsingPost400ApplicationJson = exports.ListAllPadsUsingPost200ApplicationJson = exports.ListAllPadsUsingPost200ApplicationJsonData = void 0;
var utils_1 = require("../../../internal/utils");
var ListAllPadsUsingPost200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPost200ApplicationJsonData, _super);
    function ListAllPadsUsingPost200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=padIDs" }),
        __metadata("design:type", Array)
    ], ListAllPadsUsingPost200ApplicationJsonData.prototype, "padIDs", void 0);
    return ListAllPadsUsingPost200ApplicationJsonData;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPost200ApplicationJsonData = ListAllPadsUsingPost200ApplicationJsonData;
var ListAllPadsUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPost200ApplicationJson, _super);
    function ListAllPadsUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", ListAllPadsUsingPost200ApplicationJsonData)
    ], ListAllPadsUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingPost200ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPost200ApplicationJson = ListAllPadsUsingPost200ApplicationJson;
var ListAllPadsUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPost400ApplicationJson, _super);
    function ListAllPadsUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingPost400ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPost400ApplicationJson = ListAllPadsUsingPost400ApplicationJson;
var ListAllPadsUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPost401ApplicationJson, _super);
    function ListAllPadsUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingPost401ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPost401ApplicationJson = ListAllPadsUsingPost401ApplicationJson;
var ListAllPadsUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPost500ApplicationJson, _super);
    function ListAllPadsUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], ListAllPadsUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ListAllPadsUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllPadsUsingPost500ApplicationJson.prototype, "message", void 0);
    return ListAllPadsUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPost500ApplicationJson = ListAllPadsUsingPost500ApplicationJson;
var ListAllPadsUsingPostResponse = /** @class */ (function (_super) {
    __extends(ListAllPadsUsingPostResponse, _super);
    function ListAllPadsUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllPadsUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllPadsUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingPost200ApplicationJson)
    ], ListAllPadsUsingPostResponse.prototype, "listAllPadsUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingPost400ApplicationJson)
    ], ListAllPadsUsingPostResponse.prototype, "listAllPadsUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingPost401ApplicationJson)
    ], ListAllPadsUsingPostResponse.prototype, "listAllPadsUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllPadsUsingPost500ApplicationJson)
    ], ListAllPadsUsingPostResponse.prototype, "listAllPadsUsingPOST500ApplicationJSONObject", void 0);
    return ListAllPadsUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllPadsUsingPostResponse = ListAllPadsUsingPostResponse;
