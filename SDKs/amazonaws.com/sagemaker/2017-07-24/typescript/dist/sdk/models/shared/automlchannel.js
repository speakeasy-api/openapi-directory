"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.AutoMLChannel = void 0;
var utils_1 = require("../../../internal/utils");
var automlchanneltypeenum_1 = require("./automlchanneltypeenum");
var automldatasource_1 = require("./automldatasource");
var compressiontypeenum_1 = require("./compressiontypeenum");
var class_transformer_1 = require("class-transformer");
/**
 * <p>A channel is a named input source that training algorithms can consume. The validation dataset size is limited to less than 2 GB. The training dataset size must be less than 100 GB. For more information, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html"> Channel</a> </code>.</p> <note> <p>A validation dataset must contain the same headers as the training dataset.</p> </note> <p/>
 */
var AutoMLChannel = /** @class */ (function (_super) {
    __extends(AutoMLChannel, _super);
    function AutoMLChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ChannelType" }),
        __metadata("design:type", String)
    ], AutoMLChannel.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "CompressionType" }),
        __metadata("design:type", String)
    ], AutoMLChannel.prototype, "compressionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ContentType" }),
        __metadata("design:type", String)
    ], AutoMLChannel.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DataSource" }),
        (0, class_transformer_1.Type)(function () { return automldatasource_1.AutoMLDataSource; }),
        __metadata("design:type", automldatasource_1.AutoMLDataSource)
    ], AutoMLChannel.prototype, "dataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TargetAttributeName" }),
        __metadata("design:type", String)
    ], AutoMLChannel.prototype, "targetAttributeName", void 0);
    return AutoMLChannel;
}(utils_1.SpeakeasyBase));
exports.AutoMLChannel = AutoMLChannel;
