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
exports.MovePadUsingGetResponse = exports.MovePadUsingGetRequest = exports.MovePadUsingGet500ApplicationJson = exports.MovePadUsingGet401ApplicationJson = exports.MovePadUsingGet400ApplicationJson = exports.MovePadUsingGet200ApplicationJson = exports.MovePadUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var MovePadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(MovePadUsingGetQueryParams, _super);
    function MovePadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], MovePadUsingGetQueryParams.prototype, "destinationID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], MovePadUsingGetQueryParams.prototype, "force", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], MovePadUsingGetQueryParams.prototype, "sourceID", void 0);
    return MovePadUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGetQueryParams = MovePadUsingGetQueryParams;
var MovePadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingGet200ApplicationJson, _super);
    function MovePadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingGet200ApplicationJson.prototype, "message", void 0);
    return MovePadUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGet200ApplicationJson = MovePadUsingGet200ApplicationJson;
var MovePadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingGet400ApplicationJson, _super);
    function MovePadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingGet400ApplicationJson.prototype, "message", void 0);
    return MovePadUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGet400ApplicationJson = MovePadUsingGet400ApplicationJson;
var MovePadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingGet401ApplicationJson, _super);
    function MovePadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingGet401ApplicationJson.prototype, "message", void 0);
    return MovePadUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGet401ApplicationJson = MovePadUsingGet401ApplicationJson;
var MovePadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingGet500ApplicationJson, _super);
    function MovePadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingGet500ApplicationJson.prototype, "message", void 0);
    return MovePadUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGet500ApplicationJson = MovePadUsingGet500ApplicationJson;
var MovePadUsingGetRequest = /** @class */ (function (_super) {
    __extends(MovePadUsingGetRequest, _super);
    function MovePadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingGetQueryParams)
    ], MovePadUsingGetRequest.prototype, "queryParams", void 0);
    return MovePadUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGetRequest = MovePadUsingGetRequest;
var MovePadUsingGetResponse = /** @class */ (function (_super) {
    __extends(MovePadUsingGetResponse, _super);
    function MovePadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MovePadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MovePadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingGet200ApplicationJson)
    ], MovePadUsingGetResponse.prototype, "movePadUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingGet400ApplicationJson)
    ], MovePadUsingGetResponse.prototype, "movePadUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingGet401ApplicationJson)
    ], MovePadUsingGetResponse.prototype, "movePadUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingGet500ApplicationJson)
    ], MovePadUsingGetResponse.prototype, "movePadUsingGET500ApplicationJSONObject", void 0);
    return MovePadUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingGetResponse = MovePadUsingGetResponse;
