import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLChannelTypeEnum } from "./automlchanneltypeenum";
import { AutoMLDataSource } from "./automldatasource";
import { CompressionTypeEnum } from "./compressiontypeenum";
/**
 * <p>A channel is a named input source that training algorithms can consume. The validation dataset size is limited to less than 2 GB. The training dataset size must be less than 100 GB. For more information, see <code> <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Channel.html"> Channel</a> </code>.</p> <note> <p>A validation dataset must contain the same headers as the training dataset.</p> </note> <p/>
 */
export declare class AutoMLChannel extends SpeakeasyBase {
    channelType?: AutoMLChannelTypeEnum;
    compressionType?: CompressionTypeEnum;
    contentType?: string;
    dataSource: AutoMLDataSource;
    targetAttributeName: string;
}
