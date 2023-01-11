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
exports.Input = void 0;
var utils_1 = require("../../../internal/utils");
var inputparallelism_1 = require("./inputparallelism");
var inputprocessingconfiguration_1 = require("./inputprocessingconfiguration");
var sourceschema_1 = require("./sourceschema");
var kinesisfirehoseinput_1 = require("./kinesisfirehoseinput");
var kinesisstreamsinput_1 = require("./kinesisstreamsinput");
// Input
/**
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
**/
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputParallelism" }),
        __metadata("design:type", inputparallelism_1.InputParallelism)
    ], Input.prototype, "inputParallelism", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputProcessingConfiguration" }),
        __metadata("design:type", inputprocessingconfiguration_1.InputProcessingConfiguration)
    ], Input.prototype, "inputProcessingConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputSchema" }),
        __metadata("design:type", sourceschema_1.SourceSchema)
    ], Input.prototype, "inputSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisFirehoseInput" }),
        __metadata("design:type", kinesisfirehoseinput_1.KinesisFirehoseInput)
    ], Input.prototype, "kinesisFirehoseInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisStreamsInput" }),
        __metadata("design:type", kinesisstreamsinput_1.KinesisStreamsInput)
    ], Input.prototype, "kinesisStreamsInput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NamePrefix" }),
        __metadata("design:type", String)
    ], Input.prototype, "namePrefix", void 0);
    return Input;
}(utils_1.SpeakeasyBase));
exports.Input = Input;
