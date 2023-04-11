import { SpeakeasyBase } from "../../../internal/utils";
import { QuoteDto } from "./quotedto";
/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export declare enum BatchItemQuoteDtoOpCodeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class BatchItemQuoteDto extends SpeakeasyBase {
    item?: QuoteDto;
    /**
     * 1 - Create
     *
     * @remarks
     * 2 - Update
     * 3 - Delete
     */
    opCode?: BatchItemQuoteDtoOpCodeEnum;
}
