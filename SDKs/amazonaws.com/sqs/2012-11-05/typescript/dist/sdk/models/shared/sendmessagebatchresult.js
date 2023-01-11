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
exports.SendMessageBatchResult = void 0;
var utils_1 = require("../../../internal/utils");
var batchresulterrorentrylist_1 = require("./batchresulterrorentrylist");
var sendmessagebatchresultentrylist_1 = require("./sendmessagebatchresultentrylist");
// SendMessageBatchResult
/**
 * For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
var SendMessageBatchResult = /** @class */ (function (_super) {
    __extends(SendMessageBatchResult, _super);
    function SendMessageBatchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: batchresulterrorentrylist_1.BatchResultErrorEntryList }),
        __metadata("design:type", Array)
    ], SendMessageBatchResult.prototype, "failed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: sendmessagebatchresultentrylist_1.SendMessageBatchResultEntryList }),
        __metadata("design:type", Array)
    ], SendMessageBatchResult.prototype, "successful", void 0);
    return SendMessageBatchResult;
}(utils_1.SpeakeasyBase));
exports.SendMessageBatchResult = SendMessageBatchResult;
