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
exports.CreateAppRequest = void 0;
var utils_1 = require("../../../internal/utils");
var source_1 = require("./source");
var datasource_1 = require("./datasource");
var environmentvariable_1 = require("./environmentvariable");
var sslconfiguration_1 = require("./sslconfiguration");
var apptypeenum_1 = require("./apptypeenum");
var CreateAppRequest = /** @class */ (function (_super) {
    __extends(CreateAppRequest, _super);
    function CreateAppRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AppSource" }),
        __metadata("design:type", source_1.Source)
    ], CreateAppRequest.prototype, "appSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], CreateAppRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DataSources", elemType: datasource_1.DataSource }),
        __metadata("design:type", Array)
    ], CreateAppRequest.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateAppRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Domains" }),
        __metadata("design:type", Array)
    ], CreateAppRequest.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EnableSsl" }),
        __metadata("design:type", Boolean)
    ], CreateAppRequest.prototype, "enableSsl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Environment", elemType: environmentvariable_1.EnvironmentVariable }),
        __metadata("design:type", Array)
    ], CreateAppRequest.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateAppRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Shortname" }),
        __metadata("design:type", String)
    ], CreateAppRequest.prototype, "shortname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SslConfiguration" }),
        __metadata("design:type", sslconfiguration_1.SslConfiguration)
    ], CreateAppRequest.prototype, "sslConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], CreateAppRequest.prototype, "stackId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], CreateAppRequest.prototype, "type", void 0);
    return CreateAppRequest;
}(utils_1.SpeakeasyBase));
exports.CreateAppRequest = CreateAppRequest;
