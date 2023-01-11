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
exports.MovePadUsingPostResponse = exports.MovePadUsingPostRequest = exports.MovePadUsingPost500ApplicationJson = exports.MovePadUsingPost401ApplicationJson = exports.MovePadUsingPost400ApplicationJson = exports.MovePadUsingPost200ApplicationJson = exports.MovePadUsingPostQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var MovePadUsingPostQueryParams = /** @class */ (function (_super) {
    __extends(MovePadUsingPostQueryParams, _super);
    function MovePadUsingPostQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destinationID" }),
        __metadata("design:type", String)
    ], MovePadUsingPostQueryParams.prototype, "destinationID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], MovePadUsingPostQueryParams.prototype, "force", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sourceID" }),
        __metadata("design:type", String)
    ], MovePadUsingPostQueryParams.prototype, "sourceID", void 0);
    return MovePadUsingPostQueryParams;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPostQueryParams = MovePadUsingPostQueryParams;
var MovePadUsingPost200ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingPost200ApplicationJson, _super);
    function MovePadUsingPost200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingPost200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingPost200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingPost200ApplicationJson.prototype, "message", void 0);
    return MovePadUsingPost200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPost200ApplicationJson = MovePadUsingPost200ApplicationJson;
var MovePadUsingPost400ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingPost400ApplicationJson, _super);
    function MovePadUsingPost400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingPost400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingPost400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingPost400ApplicationJson.prototype, "message", void 0);
    return MovePadUsingPost400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPost400ApplicationJson = MovePadUsingPost400ApplicationJson;
var MovePadUsingPost401ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingPost401ApplicationJson, _super);
    function MovePadUsingPost401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingPost401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingPost401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingPost401ApplicationJson.prototype, "message", void 0);
    return MovePadUsingPost401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPost401ApplicationJson = MovePadUsingPost401ApplicationJson;
var MovePadUsingPost500ApplicationJson = /** @class */ (function (_super) {
    __extends(MovePadUsingPost500ApplicationJson, _super);
    function MovePadUsingPost500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], MovePadUsingPost500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], MovePadUsingPost500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], MovePadUsingPost500ApplicationJson.prototype, "message", void 0);
    return MovePadUsingPost500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPost500ApplicationJson = MovePadUsingPost500ApplicationJson;
var MovePadUsingPostRequest = /** @class */ (function (_super) {
    __extends(MovePadUsingPostRequest, _super);
    function MovePadUsingPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingPostQueryParams)
    ], MovePadUsingPostRequest.prototype, "queryParams", void 0);
    return MovePadUsingPostRequest;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPostRequest = MovePadUsingPostRequest;
var MovePadUsingPostResponse = /** @class */ (function (_super) {
    __extends(MovePadUsingPostResponse, _super);
    function MovePadUsingPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MovePadUsingPostResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MovePadUsingPostResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingPost200ApplicationJson)
    ], MovePadUsingPostResponse.prototype, "movePadUsingPOST200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingPost400ApplicationJson)
    ], MovePadUsingPostResponse.prototype, "movePadUsingPOST400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingPost401ApplicationJson)
    ], MovePadUsingPostResponse.prototype, "movePadUsingPOST401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MovePadUsingPost500ApplicationJson)
    ], MovePadUsingPostResponse.prototype, "movePadUsingPOST500ApplicationJSONObject", void 0);
    return MovePadUsingPostResponse;
}(utils_1.SpeakeasyBase));
exports.MovePadUsingPostResponse = MovePadUsingPostResponse;
