import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDescribeModelPackageError } from "./batchdescribemodelpackageerror";
import { BatchDescribeModelPackageSummary } from "./batchdescribemodelpackagesummary";
/**
 * Success
 */
export declare class BatchDescribeModelPackageOutput extends SpeakeasyBase {
    batchDescribeModelPackageErrorMap?: Record<string, BatchDescribeModelPackageError>;
    modelPackageSummaries?: Record<string, BatchDescribeModelPackageSummary>;
}
