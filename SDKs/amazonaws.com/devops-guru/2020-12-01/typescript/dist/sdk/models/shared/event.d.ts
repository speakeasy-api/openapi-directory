import { SpeakeasyBase } from "../../../internal/utils";
import { EventClassEnum } from "./eventclassenum";
import { EventDataSourceEnum } from "./eventdatasourceenum";
import { EventResource } from "./eventresource";
import { ResourceCollection } from "./resourcecollection";
/**
 *  An Amazon Web Services resource event. Amazon Web Services resource events and metrics are analyzed by DevOps Guru to find anomalous behavior and provide recommendations to improve your operational solutions.
 */
export declare class Event extends SpeakeasyBase {
    dataSource?: EventDataSourceEnum;
    eventClass?: EventClassEnum;
    eventSource?: string;
    id?: string;
    name?: string;
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: ResourceCollection;
    resources?: EventResource[];
    time?: Date;
}
