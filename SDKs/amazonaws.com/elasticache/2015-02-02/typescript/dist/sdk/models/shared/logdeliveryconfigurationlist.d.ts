import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationDetails } from "./destinationdetails";
import { DestinationTypeEnum } from "./destinationtypeenum";
import { LogDeliveryConfigurationStatusEnum } from "./logdeliveryconfigurationstatusenum";
import { LogFormatEnum } from "./logformatenum";
import { LogTypeEnum } from "./logtypeenum";
/**
 * Returns the destination, format and type of the logs.
 */
export declare class LogDeliveryConfigurationList extends SpeakeasyBase {
    destinationDetails?: DestinationDetails;
    destinationType?: DestinationTypeEnum;
    logFormat?: LogFormatEnum;
    logType?: LogTypeEnum;
    message?: string;
    status?: LogDeliveryConfigurationStatusEnum;
}
