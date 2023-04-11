import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
/**
 * A list of parameters that specify the input channels, type of input data, and where it is located.
 */
export declare class InputFileConfig extends SpeakeasyBase {
    channelName: string;
    contentType?: string;
    dataSource: DataSource;
}
