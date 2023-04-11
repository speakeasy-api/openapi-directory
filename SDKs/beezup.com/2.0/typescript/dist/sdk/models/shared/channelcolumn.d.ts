import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelColumnConfiguration } from "./channelcolumnconfiguration";
/**
 * The channel column
 */
export declare class ChannelColumn extends SpeakeasyBase {
    /**
     * The channel column description
     */
    channelColumnDescription?: string;
    /**
     * The channel column identifier
     */
    channelColumnId: string;
    /**
     * The channel column name
     */
    channelColumnName: string;
    /**
     * The channel column configuration. The BeezUP Column Name is optional. If the BeezUP column is mapped we will indicate the data type and column importance of the BeezUP column.
     */
    configuration: ChannelColumnConfiguration;
    /**
     * The position of the column starting from 1
     */
    position: number;
    /**
     * The restricted values. The key will be the restricted value identifier (format:guid) and the value will be the restriced value
     *
     * @remarks
     *
     */
    restrictedValues?: Record<string, string>;
    /**
     * Indicates if this column must shown in the mapping page or not
     */
    showInMapping: boolean;
}
