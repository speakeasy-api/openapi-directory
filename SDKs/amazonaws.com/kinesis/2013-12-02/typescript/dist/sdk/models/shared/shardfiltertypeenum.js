"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardFilterTypeEnum = void 0;
var ShardFilterTypeEnum;
(function (ShardFilterTypeEnum) {
    ShardFilterTypeEnum["AfterShardId"] = "AFTER_SHARD_ID";
    ShardFilterTypeEnum["AtTrimHorizon"] = "AT_TRIM_HORIZON";
    ShardFilterTypeEnum["FromTrimHorizon"] = "FROM_TRIM_HORIZON";
    ShardFilterTypeEnum["AtLatest"] = "AT_LATEST";
    ShardFilterTypeEnum["AtTimestamp"] = "AT_TIMESTAMP";
    ShardFilterTypeEnum["FromTimestamp"] = "FROM_TIMESTAMP";
})(ShardFilterTypeEnum = exports.ShardFilterTypeEnum || (exports.ShardFilterTypeEnum = {}));
