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
exports.CreatePadUsingPostResponse = exports.CreatePadUsingPostRequest = exports.CreatePadUsingPost500ApplicationJson = exports.CreatePadUsingPost401ApplicationJson = exports.CreatePadUsingPost400ApplicationJson = exports.CreatePadUsingPost200ApplicationJson = exports.CreatePadUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreatePadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(CreatePadUsingPostQueryParams, _super);
    function CreatePadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], CreatePadUsingPostQueryParams.prototype, "padID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], CreatePadUsingPostQueryParams.prototype, "text", void 0);
    return CreatePadUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPostQueryParams = CreatePadUsingPostQueryParams;
var CreatePadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingPost200ApplicationJson, _super);
    function CreatePadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreatePadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingPost200ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPost200ApplicationJson = CreatePadUsingPost200ApplicationJson;
var CreatePadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingPost400ApplicationJson, _super);
    function CreatePadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreatePadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingPost400ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPost400ApplicationJson = CreatePadUsingPost400ApplicationJson;
var CreatePadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingPost401ApplicationJson, _super);
    function CreatePadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreatePadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingPost401ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPost401ApplicationJson = CreatePadUsingPost401ApplicationJson;
var CreatePadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreatePadUsingPost500ApplicationJson, _super);
    function CreatePadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreatePadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreatePadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreatePadUsingPost500ApplicationJson.prototype, "message", void 0);
    return CreatePadUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPost500ApplicationJson = CreatePadUsingPost500ApplicationJson;
var CreatePadUsingPostRequest = /** @class */ (function (_super) {
    __extends(CreatePadUsingPostRequest, _super);
    function CreatePadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePadUsingPostQueryParams)
    ], CreatePadUsingPostRequest.prototype, "queryParams", void 0);
    return CreatePadUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPostRequest = CreatePadUsingPostRequest;
var CreatePadUsingPostResponse = /** @class */ (function (_super) {
    __extends(CreatePadUsingPostResponse, _super);
    function CreatePadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreatePadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreatePadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePadUsingPost200ApplicationJson)
    ], CreatePadUsingPostResponse.prototype, "createPadUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePadUsingPost400ApplicationJson)
    ], CreatePadUsingPostResponse.prototype, "createPadUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePadUsingPost401ApplicationJson)
    ], CreatePadUsingPostResponse.prototype, "createPadUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePadUsingPost500ApplicationJson)
    ], CreatePadUsingPostResponse.prototype, "createPadUsingPOST500ApplicationJSONObject", void 0);
    return CreatePadUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.CreatePadUsingPostResponse = CreatePadUsingPostResponse;
