import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLChannelTypeEnum } from "./automlchanneltypeenum";
import { AutoMLDataSource } from "./automldatasource";
import { CompressionTypeEnum } from "./compressiontypeenum";
/**
 * A channel is a named input source that training algorithms can consume. This channel is used for the non tabular training data of an AutoML job using the V2 API. For tabular training data, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLChannel.html"> AutoMLChannel</a> </code>. For more information, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html"> Channel</a> </code>.
 */
export declare class AutoMLJobChannel extends SpeakeasyBase {
    channelType?: AutoMLChannelTypeEnum;
    compressionType?: CompressionTypeEnum;
    contentType?: string;
    dataSource?: AutoMLDataSource;
}
