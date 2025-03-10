/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StageEnum } from "./stageenum";
import { Expose, Transform } from "class-transformer";

/**
 *  The branch for an Amplify app, which maps to a third-party repository branch.
 */
export class Branch extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "activeJobId" })
  activeJobId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "associatedResources" })
  associatedResources?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "backendEnvironmentArn" })
  backendEnvironmentArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "basicAuthCredentials" })
  basicAuthCredentials?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "branchArn" })
  branchArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "branchName" })
  branchName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "buildSpec" })
  buildSpec?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "customDomains" })
  customDomains: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "destinationBranch" })
  destinationBranch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "enableAutoBuild" })
  enableAutoBuild: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enableBasicAuth" })
  enableBasicAuth: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enableNotification" })
  enableNotification: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enablePerformanceMode" })
  enablePerformanceMode?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "enablePullRequestPreview" })
  enablePullRequestPreview: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "environmentVariables" })
  environmentVariables: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "framework" })
  framework: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pullRequestEnvironmentName" })
  pullRequestEnvironmentName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceBranch" })
  sourceBranch?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stage" })
  stage: StageEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalNumberOfJobs" })
  totalNumberOfJobs: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ttl" })
  ttl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updateTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updateTime: Date;
}
