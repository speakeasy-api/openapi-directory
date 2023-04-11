import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
export declare class TestsTests extends SpeakeasyBase {
    classname?: string;
    file?: string;
    message?: string;
    name?: string;
    result?: StatusEnum;
    runTime?: number;
    source?: string;
}
/**
 * test metadata for a build
 *
 * @remarks
 *
 */
export declare class Tests extends SpeakeasyBase {
    tests?: TestsTests[];
}
