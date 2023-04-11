import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";
/**
 * Specifies the destination, format and type of the logs.
 */
export declare class LogDeliveryConfigurationRequestList extends SpeakeasyBase {
    destinationDetails?: DestinationDetails;
    destinationType?: DestinationTypeEnum;
    enabled?: boolean;
    logFormat?: LogFormatEnum;
    logType?: LogTypeEnum;
}
