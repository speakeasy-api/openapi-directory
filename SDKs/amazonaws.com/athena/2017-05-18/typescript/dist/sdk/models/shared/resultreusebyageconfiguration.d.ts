import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies whether previous query results are reused, and if so, their maximum age.
 */
export declare class ResultReuseByAgeConfiguration extends SpeakeasyBase {
    enabled: boolean;
    maxAgeInMinutes?: number;
}
