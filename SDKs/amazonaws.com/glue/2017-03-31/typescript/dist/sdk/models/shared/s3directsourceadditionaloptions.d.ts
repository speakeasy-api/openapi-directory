import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies additional connection options for the Amazon S3 data store.
 */
export declare class S3DirectSourceAdditionalOptions extends SpeakeasyBase {
    boundedFiles?: number;
    boundedSize?: number;
    enableSamplePath?: boolean;
    samplePath?: string;
}
