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
exports.CreateGroupPadUsingGetResponse = exports.CreateGroupPadUsingGetRequest = exports.CreateGroupPadUsingGet500ApplicationJson = exports.CreateGroupPadUsingGet401ApplicationJson = exports.CreateGroupPadUsingGet400ApplicationJson = exports.CreateGroupPadUsingGet200ApplicationJson = exports.CreateGroupPadUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var CreateGroupPadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGetQueryParams, _super);
    function CreateGroupPadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=groupID" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGetQueryParams.prototype, "groupID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padName" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGetQueryParams.prototype, "padName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGetQueryParams.prototype, "text", void 0);
    return CreateGroupPadUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGetQueryParams = CreateGroupPadUsingGetQueryParams;
var CreateGroupPadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGet200ApplicationJson, _super);
    function CreateGroupPadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGet200ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGet200ApplicationJson = CreateGroupPadUsingGet200ApplicationJson;
var CreateGroupPadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGet400ApplicationJson, _super);
    function CreateGroupPadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGet400ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGet400ApplicationJson = CreateGroupPadUsingGet400ApplicationJson;
var CreateGroupPadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGet401ApplicationJson, _super);
    function CreateGroupPadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGet401ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGet401ApplicationJson = CreateGroupPadUsingGet401ApplicationJson;
var CreateGroupPadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGet500ApplicationJson, _super);
    function CreateGroupPadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], CreateGroupPadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGet500ApplicationJson.prototype, "message", void 0);
    return CreateGroupPadUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGet500ApplicationJson = CreateGroupPadUsingGet500ApplicationJson;
var CreateGroupPadUsingGetRequest = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGetRequest, _super);
    function CreateGroupPadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingGetQueryParams)
    ], CreateGroupPadUsingGetRequest.prototype, "queryParams", void 0);
    return CreateGroupPadUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGetRequest = CreateGroupPadUsingGetRequest;
var CreateGroupPadUsingGetResponse = /** @class */ (function (_super) {
    __extends(CreateGroupPadUsingGetResponse, _super);
    function CreateGroupPadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGroupPadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGroupPadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingGet200ApplicationJson)
    ], CreateGroupPadUsingGetResponse.prototype, "createGroupPadUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingGet400ApplicationJson)
    ], CreateGroupPadUsingGetResponse.prototype, "createGroupPadUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingGet401ApplicationJson)
    ], CreateGroupPadUsingGetResponse.prototype, "createGroupPadUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupPadUsingGet500ApplicationJson)
    ], CreateGroupPadUsingGetResponse.prototype, "createGroupPadUsingGET500ApplicationJSONObject", void 0);
    return CreateGroupPadUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGroupPadUsingGetResponse = CreateGroupPadUsingGetResponse;
