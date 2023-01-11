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
exports.CheckTokenUsingGetResponse = exports.CheckTokenUsingGet500ApplicationJson = exports.CheckTokenUsingGet401ApplicationJson = exports.CheckTokenUsingGet400ApplicationJson = exports.CheckTokenUsingGet200ApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var CheckTokenUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingGet200ApplicationJson, _super);
    function CheckTokenUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CheckTokenUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingGet200ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CheckTokenUsingGet200ApplicationJson = CheckTokenUsingGet200ApplicationJson;
var CheckTokenUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingGet400ApplicationJson, _super);
    function CheckTokenUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CheckTokenUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingGet400ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CheckTokenUsingGet400ApplicationJson = CheckTokenUsingGet400ApplicationJson;
var CheckTokenUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingGet401ApplicationJson, _super);
    function CheckTokenUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CheckTokenUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingGet401ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CheckTokenUsingGet401ApplicationJson = CheckTokenUsingGet401ApplicationJson;
var CheckTokenUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckTokenUsingGet500ApplicationJson, _super);
    function CheckTokenUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CheckTokenUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CheckTokenUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CheckTokenUsingGet500ApplicationJson.prototype, "message", void 0);
    return CheckTokenUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CheckTokenUsingGet500ApplicationJson = CheckTokenUsingGet500ApplicationJson;
var CheckTokenUsingGetResponse = /** @class */ (function (_super) {
    __extends(CheckTokenUsingGetResponse, _super);
    function CheckTokenUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CheckTokenUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CheckTokenUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckTokenUsingGet200ApplicationJson)
    ], CheckTokenUsingGetResponse.prototype, "checkTokenUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckTokenUsingGet400ApplicationJson)
    ], CheckTokenUsingGetResponse.prototype, "checkTokenUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckTokenUsingGet401ApplicationJson)
    ], CheckTokenUsingGetResponse.prototype, "checkTokenUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CheckTokenUsingGet500ApplicationJson)
    ], CheckTokenUsingGetResponse.prototype, "checkTokenUsingGET500ApplicationJSONObject", void 0);
    return CheckTokenUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.CheckTokenUsingGetResponse = CheckTokenUsingGetResponse;
