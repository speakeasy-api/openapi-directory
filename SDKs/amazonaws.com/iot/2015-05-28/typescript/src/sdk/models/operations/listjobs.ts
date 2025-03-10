/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * An optional filter that lets you search for jobs that have the specified status.
 */
export enum ListJobsStatusEnum {
  InProgress = "IN_PROGRESS",
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  DeletionInProgress = "DELETION_IN_PROGRESS",
  Scheduled = "SCHEDULED",
}

/**
 * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
 */
export enum ListJobsTargetSelectionEnum {
  Continuous = "CONTINUOUS",
  Snapshot = "SNAPSHOT",
}

export class ListJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
  })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
  })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Credential",
  })
  xAmzCredential?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Date",
  })
  xAmzDate?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
  })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Signature",
  })
  xAmzSignature?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
  })
  xAmzSignedHeaders?: string;

  /**
   * The maximum number of results to return per request.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxResults",
  })
  maxResults?: number;

  /**
   * <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=namespaceId",
  })
  namespaceId?: string;

  /**
   * The token to retrieve the next set of results.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=nextToken",
  })
  nextToken?: string;

  /**
   * An optional filter that lets you search for jobs that have the specified status.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: ListJobsStatusEnum;

  /**
   * <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=targetSelection",
  })
  targetSelection?: ListJobsTargetSelectionEnum;

  /**
   * A filter that limits the returned jobs to those for the specified group.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=thingGroupId",
  })
  thingGroupId?: string;

  /**
   * A filter that limits the returned jobs to those for the specified group.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=thingGroupName",
  })
  thingGroupName?: string;
}

export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  listJobsResponse?: shared.ListJobsResponse;

  /**
   * ServiceUnavailableException
   */
  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;
}
