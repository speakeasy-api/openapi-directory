import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationConfig } from "./aggregationconfig";
import { FileTypeEnum } from "./filetypeenum";
import { PrefixConfig } from "./prefixconfig";
/**
 *  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination.
 */
export declare class UpsolverS3OutputFormatConfig extends SpeakeasyBase {
    /**
     *  The aggregation settings that you can use to customize the output format of your flow data.
     */
    aggregationConfig?: AggregationConfig;
    fileType?: FileTypeEnum;
    /**
     * Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.
     */
    prefixConfig: PrefixConfig;
}
