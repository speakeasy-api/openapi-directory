import { SpeakeasyBase } from "../../../internal/utils";
import { LogTypeEnum } from "./logtypeenum";
export declare class LogsRequestBody extends SpeakeasyBase {
    /**
     * type/source of logs produced
     */
    logType: LogTypeEnum;
}
