# SDK

## Overview

Amazon Macie

Amazon Web Services documentation
<https://docs.aws.amazon.com/macie2/>
### Available Operations

* [acceptInvitation](#acceptinvitation) - Accepts an Amazon Macie membership invitation that was received from a specific account.
* [batchGetCustomDataIdentifiers](#batchgetcustomdataidentifiers) - Retrieves information about one or more custom data identifiers.
* [createAllowList](#createallowlist) - Creates and defines the settings for an allow list.
* [createClassificationJob](#createclassificationjob) - Creates and defines the settings for a classification job.
* [createCustomDataIdentifier](#createcustomdataidentifier) - Creates and defines the criteria and other settings for a custom data identifier.
* [createFindingsFilter](#createfindingsfilter) - Creates and defines the criteria and other settings for a findings filter.
* [createInvitations](#createinvitations) - Sends an Amazon Macie membership invitation to one or more accounts.
* [createMember](#createmember) - Associates an account with an Amazon Macie administrator account.
* [createSampleFindings](#createsamplefindings) - Creates sample findings.
* [declineInvitations](#declineinvitations) - Declines Amazon Macie membership invitations that were received from specific accounts.
* [deleteAllowList](#deleteallowlist) - Deletes an allow list.
* [deleteCustomDataIdentifier](#deletecustomdataidentifier) - Soft deletes a custom data identifier.
* [deleteFindingsFilter](#deletefindingsfilter) - Deletes a findings filter.
* [deleteInvitations](#deleteinvitations) - Deletes Amazon Macie membership invitations that were received from specific accounts.
* [deleteMember](#deletemember) - Deletes the association between an Amazon Macie administrator account and an account.
* [describeBuckets](#describebuckets) - Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.
* [describeClassificationJob](#describeclassificationjob) - Retrieves the status and settings for a classification job.
* [describeOrganizationConfiguration](#describeorganizationconfiguration) - Retrieves the Amazon Macie configuration settings for an organization in Organizations.
* [disableMacie](#disablemacie) - Disables Amazon Macie and deletes all settings and resources for a Macie account.
* [disableOrganizationAdminAccount](#disableorganizationadminaccount) - Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [disassociateFromAdministratorAccount](#disassociatefromadministratoraccount) - Disassociates a member account from its Amazon Macie administrator account.
* [disassociateFromMasterAccount](#disassociatefrommasteraccount) - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* [disassociateMember](#disassociatemember) - Disassociates an Amazon Macie administrator account from a member account.
* [enableMacie](#enablemacie) - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* [enableOrganizationAdminAccount](#enableorganizationadminaccount) - Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.
* [getAdministratorAccount](#getadministratoraccount) - Retrieves information about the Amazon Macie administrator account for an account.
* [getAllowList](#getallowlist) - Retrieves the settings and status of an allow list.
* [getAutomatedDiscoveryConfiguration](#getautomateddiscoveryconfiguration) - Retrieves the configuration settings and status of automated sensitive data discovery for an account.
* [getBucketStatistics](#getbucketstatistics) - Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.
* [getClassificationExportConfiguration](#getclassificationexportconfiguration) - Retrieves the configuration settings for storing data classification results.
* [getClassificationScope](#getclassificationscope) - Retrieves the classification scope settings for an account.
* [getCustomDataIdentifier](#getcustomdataidentifier) - Retrieves the criteria and other settings for a custom data identifier.
* [getFindingStatistics](#getfindingstatistics) -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* [getFindings](#getfindings) - Retrieves the details of one or more findings.
* [getFindingsFilter](#getfindingsfilter) - Retrieves the criteria and other settings for a findings filter.
* [getFindingsPublicationConfiguration](#getfindingspublicationconfiguration) - Retrieves the configuration settings for publishing findings to Security Hub.
* [getInvitationsCount](#getinvitationscount) - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* [getMacieSession](#getmaciesession) - Retrieves the status and configuration settings for an Amazon Macie account.
* [getMasterAccount](#getmasteraccount) - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* [getMember](#getmember) - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* [getResourceProfile](#getresourceprofile) - Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.
* [getRevealConfiguration](#getrevealconfiguration) - Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [getSensitiveDataOccurrences](#getsensitivedataoccurrences) - Retrieves occurrences of sensitive data reported by a finding.
* [getSensitiveDataOccurrencesAvailability](#getsensitivedataoccurrencesavailability) - Checks whether occurrences of sensitive data can be retrieved for a finding.
* [getSensitivityInspectionTemplate](#getsensitivityinspectiontemplate) -  <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
* [getUsageStatistics](#getusagestatistics) - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* [getUsageTotals](#getusagetotals) - Retrieves (queries) aggregated usage data for an account.
* [listAllowLists](#listallowlists) - Retrieves a subset of information about all the allow lists for an account.
* [listClassificationJobs](#listclassificationjobs) - Retrieves a subset of information about one or more classification jobs.
* [listClassificationScopes](#listclassificationscopes) - Retrieves a subset of information about the classification scope for an account.
* [listCustomDataIdentifiers](#listcustomdataidentifiers) - Retrieves a subset of information about all the custom data identifiers for an account.
* [listFindings](#listfindings) - Retrieves a subset of information about one or more findings.
* [listFindingsFilters](#listfindingsfilters) - Retrieves a subset of information about all the findings filters for an account.
* [listInvitations](#listinvitations) - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* [listManagedDataIdentifiers](#listmanageddataidentifiers) - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* [listMembers](#listmembers) - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* [listOrganizationAdminAccounts](#listorganizationadminaccounts) - Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.
* [listResourceProfileArtifacts](#listresourceprofileartifacts) - Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.
* [listResourceProfileDetections](#listresourceprofiledetections) - Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.
* [listSensitivityInspectionTemplates](#listsensitivityinspectiontemplates) -  <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>
* [listTagsForResource](#listtagsforresource) - Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.
* [putClassificationExportConfiguration](#putclassificationexportconfiguration) - Creates or updates the configuration settings for storing data classification results.
* [putFindingsPublicationConfiguration](#putfindingspublicationconfiguration) - Updates the configuration settings for publishing findings to Security Hub.
* [searchResources](#searchresources) - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* [tagResource](#tagresource) - Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.
* [testCustomDataIdentifier](#testcustomdataidentifier) - Tests a custom data identifier.
* [untagResource](#untagresource) - Removes one or more tags (keys and values) from an Amazon Macie resource.
* [updateAllowList](#updateallowlist) - Updates the settings for an allow list.
* [updateAutomatedDiscoveryConfiguration](#updateautomateddiscoveryconfiguration) - Enables or disables automated sensitive data discovery for an account.
* [updateClassificationJob](#updateclassificationjob) - Changes the status of a classification job.
* [updateClassificationScope](#updateclassificationscope) - Updates the classification scope settings for an account.
* [updateFindingsFilter](#updatefindingsfilter) - Updates the criteria and other settings for a findings filter.
* [updateMacieSession](#updatemaciesession) - Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.
* [updateMemberSession](#updatemembersession) - Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.
* [updateOrganizationConfiguration](#updateorganizationconfiguration) - Updates the Amazon Macie configuration settings for an organization in Organizations.
* [updateResourceProfile](#updateresourceprofile) - Updates the sensitivity score for an S3 bucket.
* [updateResourceProfileDetections](#updateresourceprofiledetections) - Updates the sensitivity scoring settings for an S3 bucket.
* [updateRevealConfiguration](#updaterevealconfiguration) - Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.
* [updateSensitivityInspectionTemplate](#updatesensitivityinspectiontemplate) -  <p>Updates the settings for the sensitivity inspection template for an account.</p>

## acceptInvitation

Accepts an Amazon Macie membership invitation that was received from a specific account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptInvitationRequest;
import org.openapis.openapi.models.operations.AcceptInvitationRequestBody;
import org.openapis.openapi.models.operations.AcceptInvitationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptInvitationRequest req = new AcceptInvitationRequest(                new AcceptInvitationRequestBody("iure") {{
                                administratorAccountId = "magnam";
                                masterAccount = "debitis";
                            }};) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AcceptInvitationResponse res = sdk.sdk.acceptInvitation(req);

            if (res.acceptInvitationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetCustomDataIdentifiers

Retrieves information about one or more custom data identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetCustomDataIdentifiersRequest;
import org.openapis.openapi.models.operations.BatchGetCustomDataIdentifiersRequestBody;
import org.openapis.openapi.models.operations.BatchGetCustomDataIdentifiersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCustomDataIdentifiersRequest req = new BatchGetCustomDataIdentifiersRequest(                new BatchGetCustomDataIdentifiersRequestBody() {{
                                ids = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                            }};) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            BatchGetCustomDataIdentifiersResponse res = sdk.sdk.batchGetCustomDataIdentifiers(req);

            if (res.batchGetCustomDataIdentifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAllowList

Creates and defines the settings for an allow list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAllowListRequest;
import org.openapis.openapi.models.operations.CreateAllowListRequestBody;
import org.openapis.openapi.models.operations.CreateAllowListRequestBodyCriteria;
import org.openapis.openapi.models.operations.CreateAllowListResponse;
import org.openapis.openapi.models.shared.S3WordsList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAllowListRequest req = new CreateAllowListRequest(                new CreateAllowListRequestBody("repellendus",                 new CreateAllowListRequestBodyCriteria() {{
                                                regex = "sapiente";
                                                s3WordsList = new S3WordsList("quo", "odit");;
                                            }};, "at") {{
                                description = "at";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "quod");
                                    put("quod", "esse");
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                            }};) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            CreateAllowListResponse res = sdk.sdk.createAllowList(req);

            if (res.createAllowListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createClassificationJob

Creates and defines the settings for a classification job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClassificationJobRequest;
import org.openapis.openapi.models.operations.CreateClassificationJobRequestBody;
import org.openapis.openapi.models.operations.CreateClassificationJobRequestBodyJobTypeEnum;
import org.openapis.openapi.models.operations.CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum;
import org.openapis.openapi.models.operations.CreateClassificationJobRequestBodyS3JobDefinition;
import org.openapis.openapi.models.operations.CreateClassificationJobRequestBodyScheduleFrequency;
import org.openapis.openapi.models.operations.CreateClassificationJobResponse;
import org.openapis.openapi.models.shared.CriteriaBlockForJob;
import org.openapis.openapi.models.shared.CriteriaForJob;
import org.openapis.openapi.models.shared.DayOfWeekEnum;
import org.openapis.openapi.models.shared.JobComparatorEnum;
import org.openapis.openapi.models.shared.JobScopeTerm;
import org.openapis.openapi.models.shared.JobScopingBlock;
import org.openapis.openapi.models.shared.MonthlySchedule;
import org.openapis.openapi.models.shared.S3BucketCriteriaForJob;
import org.openapis.openapi.models.shared.S3BucketDefinitionForJob;
import org.openapis.openapi.models.shared.ScopeFilterKeyEnum;
import org.openapis.openapi.models.shared.Scoping;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleCriterionForJob;
import org.openapis.openapi.models.shared.SimpleCriterionKeyForJobEnum;
import org.openapis.openapi.models.shared.SimpleScopeTerm;
import org.openapis.openapi.models.shared.TagCriterionForJob;
import org.openapis.openapi.models.shared.TagCriterionPairForJob;
import org.openapis.openapi.models.shared.TagScopeTerm;
import org.openapis.openapi.models.shared.TagTargetEnum;
import org.openapis.openapi.models.shared.TagValuePair;
import org.openapis.openapi.models.shared.WeeklySchedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClassificationJobRequest req = new CreateClassificationJobRequest(                new CreateClassificationJobRequestBody("beatae", CreateClassificationJobRequestBodyJobTypeEnum.ONE_TIME, "molestiae",                 new CreateClassificationJobRequestBodyS3JobDefinition() {{
                                                bucketCriteria = new S3BucketCriteriaForJob() {{
                                                    excludes = new CriteriaBlockForJob() {{
                                                        and = new org.openapis.openapi.models.shared.CriteriaForJob[]{{
                                                            add(new CriteriaForJob() {{
                                                                simpleCriterion = new SimpleCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.GT;
                                                                    key = SimpleCriterionKeyForJobEnum.S3_BUCKET_SHARED_ACCESS;
                                                                    values = new String[]{{
                                                                        add("esse"),
                                                                        add("ipsum"),
                                                                        add("excepturi"),
                                                                    }};
                                                                }};
                                                                tagCriterion = new TagCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.GT;
                                                                    tagValues = new org.openapis.openapi.models.shared.TagCriterionPairForJob[]{{
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "ad";
                                                                            value = "natus";
                                                                        }}),
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new CriteriaForJob() {{
                                                                simpleCriterion = new SimpleCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.GT;
                                                                    key = SimpleCriterionKeyForJobEnum.S3_BUCKET_EFFECTIVE_PERMISSION;
                                                                    values = new String[]{{
                                                                        add("natus"),
                                                                    }};
                                                                }};
                                                                tagCriterion = new TagCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.LT;
                                                                    tagValues = new org.openapis.openapi.models.shared.TagCriterionPairForJob[]{{
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "saepe";
                                                                            value = "fuga";
                                                                        }}),
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "in";
                                                                            value = "corporis";
                                                                        }}),
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "iste";
                                                                            value = "iure";
                                                                        }}),
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "saepe";
                                                                            value = "quidem";
                                                                        }}),
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                    includes = new CriteriaBlockForJob() {{
                                                        and = new org.openapis.openapi.models.shared.CriteriaForJob[]{{
                                                            add(new CriteriaForJob() {{
                                                                simpleCriterion = new SimpleCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.EQ;
                                                                    key = SimpleCriterionKeyForJobEnum.S3_BUCKET_SHARED_ACCESS;
                                                                    values = new String[]{{
                                                                        add("mollitia"),
                                                                        add("laborum"),
                                                                        add("dolores"),
                                                                    }};
                                                                }};
                                                                tagCriterion = new TagCriterionForJob() {{
                                                                    comparator = JobComparatorEnum.GT;
                                                                    tagValues = new org.openapis.openapi.models.shared.TagCriterionPairForJob[]{{
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "explicabo";
                                                                            value = "nobis";
                                                                        }}),
                                                                        add(new TagCriterionPairForJob() {{
                                                                            key = "enim";
                                                                            value = "omnis";
                                                                        }}),
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                }};;
                                                bucketDefinitions = new org.openapis.openapi.models.shared.S3BucketDefinitionForJob[]{{
                                                    add(new S3BucketDefinitionForJob("doloribus",                 new String[]{{
                                                                        add("architecto"),
                                                                        add("mollitia"),
                                                                        add("dolorem"),
                                                                        add("culpa"),
                                                                    }}) {{
                                                        accountId = "minima";
                                                        buckets = new String[]{{
                                                            add("accusantium"),
                                                            add("iure"),
                                                            add("culpa"),
                                                        }};
                                                    }}),
                                                    add(new S3BucketDefinitionForJob("quam",                 new String[]{{
                                                                        add("velit"),
                                                                        add("error"),
                                                                    }}) {{
                                                        accountId = "consequuntur";
                                                        buckets = new String[]{{
                                                            add("mollitia"),
                                                            add("occaecati"),
                                                            add("numquam"),
                                                            add("commodi"),
                                                        }};
                                                    }}),
                                                }};
                                                scoping = new Scoping() {{
                                                    excludes = new JobScopingBlock() {{
                                                        and = new org.openapis.openapi.models.shared.JobScopeTerm[]{{
                                                            add(new JobScopeTerm() {{
                                                                simpleScopeTerm = new SimpleScopeTerm() {{
                                                                    comparator = JobComparatorEnum.GTE;
                                                                    key = ScopeFilterKeyEnum.OBJECT_EXTENSION;
                                                                    values = new String[]{{
                                                                        add("animi"),
                                                                        add("enim"),
                                                                        add("odit"),
                                                                    }};
                                                                }};
                                                                tagScopeTerm = new TagScopeTerm() {{
                                                                    comparator = JobComparatorEnum.CONTAINS;
                                                                    key = "sequi";
                                                                    tagValues = new org.openapis.openapi.models.shared.TagValuePair[]{{
                                                                        add(new TagValuePair() {{
                                                                            key = "ipsam";
                                                                            value = "id";
                                                                        }}),
                                                                        add(new TagValuePair() {{
                                                                            key = "possimus";
                                                                            value = "aut";
                                                                        }}),
                                                                        add(new TagValuePair() {{
                                                                            key = "quasi";
                                                                            value = "error";
                                                                        }}),
                                                                        add(new TagValuePair() {{
                                                                            key = "temporibus";
                                                                            value = "laborum";
                                                                        }}),
                                                                    }};
                                                                    target = TagTargetEnum.S3_OBJECT;
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                    includes = new JobScopingBlock() {{
                                                        and = new org.openapis.openapi.models.shared.JobScopeTerm[]{{
                                                            add(new JobScopeTerm() {{
                                                                simpleScopeTerm = new SimpleScopeTerm() {{
                                                                    comparator = JobComparatorEnum.STARTS_WITH;
                                                                    key = ScopeFilterKeyEnum.OBJECT_KEY;
                                                                    values = new String[]{{
                                                                        add("nihil"),
                                                                        add("praesentium"),
                                                                        add("voluptatibus"),
                                                                        add("ipsa"),
                                                                    }};
                                                                }};
                                                                tagScopeTerm = new TagScopeTerm() {{
                                                                    comparator = JobComparatorEnum.LTE;
                                                                    key = "voluptate";
                                                                    tagValues = new org.openapis.openapi.models.shared.TagValuePair[]{{
                                                                        add(new TagValuePair() {{
                                                                            key = "perferendis";
                                                                            value = "doloremque";
                                                                        }}),
                                                                        add(new TagValuePair() {{
                                                                            key = "reprehenderit";
                                                                            value = "ut";
                                                                        }}),
                                                                        add(new TagValuePair() {{
                                                                            key = "maiores";
                                                                            value = "dicta";
                                                                        }}),
                                                                    }};
                                                                    target = TagTargetEnum.S3_OBJECT;
                                                                }};
                                                            }}),
                                                        }};
                                                    }};;
                                                }};;
                                            }};) {{
                                allowListIds = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                customDataIdentifierIds = new String[]{{
                                    add("harum"),
                                }};
                                description = "enim";
                                initialRun = false;
                                managedDataIdentifierIds = new String[]{{
                                    add("commodi"),
                                    add("repudiandae"),
                                    add("quae"),
                                    add("ipsum"),
                                }};
                                managedDataIdentifierSelector = CreateClassificationJobRequestBodyManagedDataIdentifierSelectorEnum.INCLUDE;
                                samplingPercentage = 565189L;
                                scheduleFrequency = new CreateClassificationJobRequestBodyScheduleFrequency() {{
                                    dailySchedule = new java.util.HashMap<String, Object>() {{
                                        put("pariatur", "modi");
                                        put("praesentium", "rem");
                                        put("voluptates", "quasi");
                                    }};
                                    monthlySchedule = new MonthlySchedule() {{
                                        dayOfMonth = 921158L;
                                    }};;
                                    weeklySchedule = new WeeklySchedule() {{
                                        dayOfWeek = DayOfWeekEnum.THURSDAY;
                                    }};;
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("itaque", "incidunt");
                                }};
                            }};) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            CreateClassificationJobResponse res = sdk.sdk.createClassificationJob(req);

            if (res.createClassificationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomDataIdentifier

Creates and defines the criteria and other settings for a custom data identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomDataIdentifierRequest;
import org.openapis.openapi.models.operations.CreateCustomDataIdentifierRequestBody;
import org.openapis.openapi.models.operations.CreateCustomDataIdentifierResponse;
import org.openapis.openapi.models.shared.DataIdentifierSeverityEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SeverityLevel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomDataIdentifierRequest req = new CreateCustomDataIdentifierRequest(                new CreateCustomDataIdentifierRequestBody("labore", "modi") {{
                                clientToken = "qui";
                                description = "aliquid";
                                ignoreWords = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                                keywords = new String[]{{
                                    add("ipsam"),
                                    add("alias"),
                                    add("fugit"),
                                    add("dolorum"),
                                }};
                                maximumMatchDistance = 569618L;
                                severityLevels = new org.openapis.openapi.models.shared.SeverityLevel[]{{
                                    add(new SeverityLevel(288476L, DataIdentifierSeverityEnum.HIGH) {{
                                        occurrencesThreshold = 703737L;
                                        severity = DataIdentifierSeverityEnum.HIGH;
                                    }}),
                                    add(new SeverityLevel(756107L, DataIdentifierSeverityEnum.MEDIUM) {{
                                        occurrencesThreshold = 433288L;
                                        severity = DataIdentifierSeverityEnum.LOW;
                                    }}),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("provident", "necessitatibus");
                                    put("sint", "officia");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            CreateCustomDataIdentifierResponse res = sdk.sdk.createCustomDataIdentifier(req);

            if (res.createCustomDataIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFindingsFilter

Creates and defines the criteria and other settings for a findings filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFindingsFilterRequest;
import org.openapis.openapi.models.operations.CreateFindingsFilterRequestBody;
import org.openapis.openapi.models.operations.CreateFindingsFilterRequestBodyActionEnum;
import org.openapis.openapi.models.operations.CreateFindingsFilterRequestBodyFindingCriteria;
import org.openapis.openapi.models.operations.CreateFindingsFilterResponse;
import org.openapis.openapi.models.shared.CriterionAdditionalProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFindingsFilterRequest req = new CreateFindingsFilterRequest(                new CreateFindingsFilterRequestBody(CreateFindingsFilterRequestBodyActionEnum.NOOP,                 new CreateFindingsFilterRequestBodyFindingCriteria() {{
                                                criterion = new java.util.HashMap<String, org.openapis.openapi.models.shared.CriterionAdditionalProperties>() {{
                                                    put("magnam", new CriterionAdditionalProperties() {{
                                                        eq = new String[]{{
                                                            add("facere"),
                                                            add("ea"),
                                                            add("aliquid"),
                                                            add("laborum"),
                                                        }};
                                                        eqExactMatch = new String[]{{
                                                            add("non"),
                                                            add("occaecati"),
                                                            add("enim"),
                                                            add("accusamus"),
                                                        }};
                                                        gt = 965417L;
                                                        gte = 692532L;
                                                        lt = 588465L;
                                                        lte = 725255L;
                                                        neq = new String[]{{
                                                            add("blanditiis"),
                                                            add("deleniti"),
                                                            add("sapiente"),
                                                        }};
                                                    }});
                                                }};
                                            }};, "amet") {{
                                clientToken = "deserunt";
                                description = "nisi";
                                position = 423855L;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("omnis", "molestiae");
                                    put("perferendis", "nihil");
                                    put("magnam", "distinctio");
                                }};
                            }};) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "labore";
                xAmzCredential = "labore";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "eum";
            }};            

            CreateFindingsFilterResponse res = sdk.sdk.createFindingsFilter(req);

            if (res.createFindingsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInvitations

Sends an Amazon Macie membership invitation to one or more accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInvitationsRequest;
import org.openapis.openapi.models.operations.CreateInvitationsRequestBody;
import org.openapis.openapi.models.operations.CreateInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInvitationsRequest req = new CreateInvitationsRequest(                new CreateInvitationsRequestBody(                new String[]{{
                                                add("architecto"),
                                            }}) {{
                                disableEmailNotification = false;
                                message = "magnam";
                            }};) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            CreateInvitationsResponse res = sdk.sdk.createInvitations(req);

            if (res.createInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createMember

Associates an account with an Amazon Macie administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberRequestBody;
import org.openapis.openapi.models.operations.CreateMemberRequestBodyAccount;
import org.openapis.openapi.models.operations.CreateMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateMemberRequest req = new CreateMemberRequest(                new CreateMemberRequestBody(                new CreateMemberRequestBodyAccount() {{
                                                accountId = "reiciendis";
                                                email = "Emmie89@yahoo.com";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("nemo", "quasi");
                                }};
                            }};) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "debitis";
                xAmzDate = "eius";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "facilis";
            }};            

            CreateMemberResponse res = sdk.sdk.createMember(req);

            if (res.createMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSampleFindings

Creates sample findings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSampleFindingsRequest;
import org.openapis.openapi.models.operations.CreateSampleFindingsRequestBody;
import org.openapis.openapi.models.operations.CreateSampleFindingsResponse;
import org.openapis.openapi.models.shared.FindingTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSampleFindingsRequest req = new CreateSampleFindingsRequest(                new CreateSampleFindingsRequestBody() {{
                                findingTypes = new org.openapis.openapi.models.shared.FindingTypeEnum[]{{
                                    add(FindingTypeEnum.SENSITIVE_DATA_S3_OBJECT_FINANCIAL),
                                }};
                            }};) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            CreateSampleFindingsResponse res = sdk.sdk.createSampleFindings(req);

            if (res.createSampleFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## declineInvitations

Declines Amazon Macie membership invitations that were received from specific accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeclineInvitationsRequest;
import org.openapis.openapi.models.operations.DeclineInvitationsRequestBody;
import org.openapis.openapi.models.operations.DeclineInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeclineInvitationsRequest req = new DeclineInvitationsRequest(                new DeclineInvitationsRequestBody(                new String[]{{
                                                add("accusantium"),
                                                add("consequuntur"),
                                                add("praesentium"),
                                                add("natus"),
                                            }});) {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            DeclineInvitationsResponse res = sdk.sdk.declineInvitations(req);

            if (res.declineInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAllowList

Deletes an allow list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAllowListRequest;
import org.openapis.openapi.models.operations.DeleteAllowListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAllowListRequest req = new DeleteAllowListRequest("odit") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "ab";
                xAmzDate = "maiores";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "voluptate";
                ignoreJobChecks = "autem";
            }};            

            DeleteAllowListResponse res = sdk.sdk.deleteAllowList(req);

            if (res.deleteAllowListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomDataIdentifier

Soft deletes a custom data identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomDataIdentifierRequest;
import org.openapis.openapi.models.operations.DeleteCustomDataIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomDataIdentifierRequest req = new DeleteCustomDataIdentifierRequest("eaque") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "voluptatibus";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "aut";
            }};            

            DeleteCustomDataIdentifierResponse res = sdk.sdk.deleteCustomDataIdentifier(req);

            if (res.deleteCustomDataIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFindingsFilter

Deletes a findings filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFindingsFilterRequest;
import org.openapis.openapi.models.operations.DeleteFindingsFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFindingsFilterRequest req = new DeleteFindingsFilterRequest("corporis") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "libero";
                xAmzCredential = "nobis";
                xAmzDate = "dolores";
                xAmzSecurityToken = "quis";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DeleteFindingsFilterResponse res = sdk.sdk.deleteFindingsFilter(req);

            if (res.deleteFindingsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInvitations

Deletes Amazon Macie membership invitations that were received from specific accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInvitationsRequest;
import org.openapis.openapi.models.operations.DeleteInvitationsRequestBody;
import org.openapis.openapi.models.operations.DeleteInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInvitationsRequest req = new DeleteInvitationsRequest(                new DeleteInvitationsRequestBody(                new String[]{{
                                                add("nesciunt"),
                                                add("eos"),
                                            }});) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "minus";
                xAmzDate = "quam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nostrum";
            }};            

            DeleteInvitationsResponse res = sdk.sdk.deleteInvitations(req);

            if (res.deleteInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMember

Deletes the association between an Amazon Macie administrator account and an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMemberRequest;
import org.openapis.openapi.models.operations.DeleteMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteMemberRequest req = new DeleteMemberRequest("recusandae") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            DeleteMemberResponse res = sdk.sdk.deleteMember(req);

            if (res.deleteMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBuckets

Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBucketsRequest;
import org.openapis.openapi.models.operations.DescribeBucketsRequestBody;
import org.openapis.openapi.models.operations.DescribeBucketsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.DescribeBucketsResponse;
import org.openapis.openapi.models.shared.BucketCriteriaAdditionalProperties;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBucketsRequest req = new DescribeBucketsRequest(                new DescribeBucketsRequestBody() {{
                                criteria = new java.util.HashMap<String, org.openapis.openapi.models.shared.BucketCriteriaAdditionalProperties>() {{
                                    put("occaecati", new BucketCriteriaAdditionalProperties() {{
                                        eq = new String[]{{
                                            add("adipisci"),
                                            add("asperiores"),
                                            add("earum"),
                                        }};
                                        gt = 267262L;
                                        gte = 613966L;
                                        lt = 679091L;
                                        lte = 535633L;
                                        neq = new String[]{{
                                            add("provident"),
                                            add("nobis"),
                                            add("libero"),
                                            add("delectus"),
                                        }};
                                        prefix = "quaerat";
                                    }});
                                }};
                                maxResults = 554242L;
                                nextToken = "aliquid";
                                sortCriteria = new DescribeBucketsRequestBodySortCriteria() {{
                                    attributeName = "dolorem";
                                    orderBy = OrderByEnum.ASC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "qui";
                xAmzCredential = "ipsum";
                xAmzDate = "hic";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "voluptate";
                maxResults = "dignissimos";
                nextToken = "reiciendis";
            }};            

            DescribeBucketsResponse res = sdk.sdk.describeBuckets(req);

            if (res.describeBucketsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeClassificationJob

Retrieves the status and settings for a classification job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeClassificationJobRequest;
import org.openapis.openapi.models.operations.DescribeClassificationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeClassificationJobRequest req = new DescribeClassificationJobRequest("dolorum") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "iure";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "quaerat";
            }};            

            DescribeClassificationJobResponse res = sdk.sdk.describeClassificationJob(req);

            if (res.describeClassificationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationConfiguration

Retrieves the Amazon Macie configuration settings for an organization in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationConfigurationRequest req = new DescribeOrganizationConfigurationRequest() {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "natus";
                xAmzSecurityToken = "eos";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "sit";
            }};            

            DescribeOrganizationConfigurationResponse res = sdk.sdk.describeOrganizationConfiguration(req);

            if (res.describeOrganizationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableMacie

Disables Amazon Macie and deletes all settings and resources for a Macie account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableMacieRequest;
import org.openapis.openapi.models.operations.DisableMacieResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableMacieRequest req = new DisableMacieRequest() {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dolorum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "deleniti";
            }};            

            DisableMacieResponse res = sdk.sdk.disableMacie(req);

            if (res.disableMacieResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableOrganizationAdminAccount

Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.DisableOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableOrganizationAdminAccountRequest req = new DisableOrganizationAdminAccountRequest("necessitatibus") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            DisableOrganizationAdminAccountResponse res = sdk.sdk.disableOrganizationAdminAccount(req);

            if (res.disableOrganizationAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFromAdministratorAccount

Disassociates a member account from its Amazon Macie administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFromAdministratorAccountRequest;
import org.openapis.openapi.models.operations.DisassociateFromAdministratorAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFromAdministratorAccountRequest req = new DisassociateFromAdministratorAccountRequest() {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "amet";
                xAmzDate = "optio";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "saepe";
            }};            

            DisassociateFromAdministratorAccountResponse res = sdk.sdk.disassociateFromAdministratorAccount(req);

            if (res.disassociateFromAdministratorAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFromMasterAccount

(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFromMasterAccountRequest;
import org.openapis.openapi.models.operations.DisassociateFromMasterAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFromMasterAccountRequest req = new DisassociateFromMasterAccountRequest() {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "provident";
                xAmzCredential = "minima";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "totam";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "alias";
            }};            

            DisassociateFromMasterAccountResponse res = sdk.sdk.disassociateFromMasterAccount(req);

            if (res.disassociateFromMasterAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMember

Disassociates an Amazon Macie administrator account from a member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMemberRequest;
import org.openapis.openapi.models.operations.DisassociateMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMemberRequest req = new DisassociateMemberRequest("quaerat") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            DisassociateMemberResponse res = sdk.sdk.disassociateMember(req);

            if (res.disassociateMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableMacie

Enables Amazon Macie and specifies the configuration settings for a Macie account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableMacieRequest;
import org.openapis.openapi.models.operations.EnableMacieRequestBody;
import org.openapis.openapi.models.operations.EnableMacieRequestBodyFindingPublishingFrequencyEnum;
import org.openapis.openapi.models.operations.EnableMacieRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.EnableMacieResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableMacieRequest req = new EnableMacieRequest(                new EnableMacieRequestBody() {{
                                clientToken = "harum";
                                findingPublishingFrequency = EnableMacieRequestBodyFindingPublishingFrequencyEnum.ONE_HOUR;
                                status = EnableMacieRequestBodyStatusEnum.PAUSED;
                            }};) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            EnableMacieResponse res = sdk.sdk.enableMacie(req);

            if (res.enableMacieResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableOrganizationAdminAccount

Designates an account as the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountRequest;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountRequestBody;
import org.openapis.openapi.models.operations.EnableOrganizationAdminAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableOrganizationAdminAccountRequest req = new EnableOrganizationAdminAccountRequest(                new EnableOrganizationAdminAccountRequestBody("sapiente") {{
                                clientToken = "totam";
                            }};) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "sit";
                xAmzCredential = "expedita";
                xAmzDate = "neque";
                xAmzSecurityToken = "sed";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "libero";
            }};            

            EnableOrganizationAdminAccountResponse res = sdk.sdk.enableOrganizationAdminAccount(req);

            if (res.enableOrganizationAdminAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAdministratorAccount

Retrieves information about the Amazon Macie administrator account for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAdministratorAccountRequest;
import org.openapis.openapi.models.operations.GetAdministratorAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAdministratorAccountRequest req = new GetAdministratorAccountRequest() {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "quam";
                xAmzCredential = "ipsum";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "maxime";
            }};            

            GetAdministratorAccountResponse res = sdk.sdk.getAdministratorAccount(req);

            if (res.getAdministratorAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllowList

Retrieves the settings and status of an allow list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllowListRequest;
import org.openapis.openapi.models.operations.GetAllowListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllowListRequest req = new GetAllowListRequest("soluta") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "totam";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "distinctio";
            }};            

            GetAllowListResponse res = sdk.sdk.getAllowList(req);

            if (res.getAllowListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomatedDiscoveryConfiguration

Retrieves the configuration settings and status of automated sensitive data discovery for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomatedDiscoveryConfigurationRequest;
import org.openapis.openapi.models.operations.GetAutomatedDiscoveryConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAutomatedDiscoveryConfigurationRequest req = new GetAutomatedDiscoveryConfigurationRequest() {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestias";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "qui";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "fugit";
            }};            

            GetAutomatedDiscoveryConfigurationResponse res = sdk.sdk.getAutomatedDiscoveryConfiguration(req);

            if (res.getAutomatedDiscoveryConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBucketStatistics

Retrieves (queries) aggregated statistical data about all the S3 buckets that Amazon Macie monitors and analyzes for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBucketStatisticsRequest;
import org.openapis.openapi.models.operations.GetBucketStatisticsRequestBody;
import org.openapis.openapi.models.operations.GetBucketStatisticsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBucketStatisticsRequest req = new GetBucketStatisticsRequest(                new GetBucketStatisticsRequestBody() {{
                                accountId = "odio";
                            }};) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            GetBucketStatisticsResponse res = sdk.sdk.getBucketStatistics(req);

            if (res.getBucketStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClassificationExportConfiguration

Retrieves the configuration settings for storing data classification results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationExportConfigurationRequest;
import org.openapis.openapi.models.operations.GetClassificationExportConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClassificationExportConfigurationRequest req = new GetClassificationExportConfigurationRequest() {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "ipsum";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "tempore";
            }};            

            GetClassificationExportConfigurationResponse res = sdk.sdk.getClassificationExportConfiguration(req);

            if (res.getClassificationExportConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClassificationScope

Retrieves the classification scope settings for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationScopeRequest;
import org.openapis.openapi.models.operations.GetClassificationScopeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetClassificationScopeRequest req = new GetClassificationScopeRequest("aperiam") {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolore";
                xAmzDate = "labore";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "architecto";
            }};            

            GetClassificationScopeResponse res = sdk.sdk.getClassificationScope(req);

            if (res.getClassificationScopeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomDataIdentifier

Retrieves the criteria and other settings for a custom data identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomDataIdentifierRequest;
import org.openapis.openapi.models.operations.GetCustomDataIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomDataIdentifierRequest req = new GetCustomDataIdentifierRequest("aut") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetCustomDataIdentifierResponse res = sdk.sdk.getCustomDataIdentifier(req);

            if (res.getCustomDataIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingStatistics

 <p>Retrieves (queries) aggregated statistical data about findings.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingStatisticsRequest;
import org.openapis.openapi.models.operations.GetFindingStatisticsRequestBody;
import org.openapis.openapi.models.operations.GetFindingStatisticsRequestBodyFindingCriteria;
import org.openapis.openapi.models.operations.GetFindingStatisticsRequestBodyGroupByEnum;
import org.openapis.openapi.models.operations.GetFindingStatisticsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.GetFindingStatisticsResponse;
import org.openapis.openapi.models.shared.CriterionAdditionalProperties;
import org.openapis.openapi.models.shared.FindingStatisticsSortAttributeNameEnum;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingStatisticsRequest req = new GetFindingStatisticsRequest(                new GetFindingStatisticsRequestBody(GetFindingStatisticsRequestBodyGroupByEnum.CLASSIFICATION_DETAILS_JOB_ID) {{
                                findingCriteria = new GetFindingStatisticsRequestBodyFindingCriteria() {{
                                    criterion = new java.util.HashMap<String, org.openapis.openapi.models.shared.CriterionAdditionalProperties>() {{
                                        put("qui", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("laudantium"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("occaecati"),
                                                add("voluptatibus"),
                                            }};
                                            gt = 787542L;
                                            gte = 876506L;
                                            lt = 606476L;
                                            lte = 338159L;
                                            neq = new String[]{{
                                                add("delectus"),
                                            }};
                                        }});
                                        put("voluptate", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("vero"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("dignissimos"),
                                                add("hic"),
                                                add("distinctio"),
                                                add("quod"),
                                            }};
                                            gt = 486160L;
                                            gte = 630448L;
                                            lt = 708548L;
                                            lte = 874288L;
                                            neq = new String[]{{
                                                add("dolore"),
                                                add("quibusdam"),
                                            }};
                                        }});
                                        put("illum", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("natus"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("aut"),
                                                add("voluptatibus"),
                                                add("exercitationem"),
                                                add("nulla"),
                                            }};
                                            gt = 148141L;
                                            gte = 780427L;
                                            lt = 981830L;
                                            lte = 985033L;
                                            neq = new String[]{{
                                                add("eligendi"),
                                                add("ducimus"),
                                            }};
                                        }});
                                    }};
                                }};;
                                size = 4048L;
                                sortCriteria = new GetFindingStatisticsRequestBodySortCriteria() {{
                                    attributeName = FindingStatisticsSortAttributeNameEnum.COUNT;
                                    orderBy = OrderByEnum.ASC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
            }};            

            GetFindingStatisticsResponse res = sdk.sdk.getFindingStatistics(req);

            if (res.getFindingStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindings

Retrieves the details of one or more findings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingsRequest;
import org.openapis.openapi.models.operations.GetFindingsRequestBody;
import org.openapis.openapi.models.operations.GetFindingsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.GetFindingsResponse;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingsRequest req = new GetFindingsRequest(                new GetFindingsRequestBody(                new String[]{{
                                                add("dicta"),
                                                add("dolor"),
                                                add("maiores"),
                                            }}) {{
                                sortCriteria = new GetFindingsRequestBodySortCriteria() {{
                                    attributeName = "quasi";
                                    orderBy = OrderByEnum.ASC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            GetFindingsResponse res = sdk.sdk.getFindings(req);

            if (res.getFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingsFilter

Retrieves the criteria and other settings for a findings filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingsFilterRequest;
import org.openapis.openapi.models.operations.GetFindingsFilterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingsFilterRequest req = new GetFindingsFilterRequest("impedit") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            GetFindingsFilterResponse res = sdk.sdk.getFindingsFilter(req);

            if (res.getFindingsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFindingsPublicationConfiguration

Retrieves the configuration settings for publishing findings to Security Hub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFindingsPublicationConfigurationRequest;
import org.openapis.openapi.models.operations.GetFindingsPublicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFindingsPublicationConfigurationRequest req = new GetFindingsPublicationConfigurationRequest() {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "minima";
                xAmzDate = "eaque";
                xAmzSecurityToken = "a";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "aut";
            }};            

            GetFindingsPublicationConfigurationResponse res = sdk.sdk.getFindingsPublicationConfiguration(req);

            if (res.getFindingsPublicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInvitationsCount

Retrieves the count of Amazon Macie membership invitations that were received by an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvitationsCountRequest;
import org.openapis.openapi.models.operations.GetInvitationsCountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInvitationsCountRequest req = new GetInvitationsCountRequest() {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "aliquam";
                xAmzDate = "fugit";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "non";
            }};            

            GetInvitationsCountResponse res = sdk.sdk.getInvitationsCount(req);

            if (res.getInvitationsCountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMacieSession

Retrieves the status and configuration settings for an Amazon Macie account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMacieSessionRequest;
import org.openapis.openapi.models.operations.GetMacieSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMacieSessionRequest req = new GetMacieSessionRequest() {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "placeat";
                xAmzDate = "velit";
                xAmzSecurityToken = "eum";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nobis";
            }};            

            GetMacieSessionResponse res = sdk.sdk.getMacieSession(req);

            if (res.getMacieSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMasterAccount

(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMasterAccountRequest;
import org.openapis.openapi.models.operations.GetMasterAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMasterAccountRequest req = new GetMasterAccountRequest() {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "voluptas";
                xAmzDate = "libero";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "numquam";
            }};            

            GetMasterAccountResponse res = sdk.sdk.getMasterAccount(req);

            if (res.getMasterAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMember

Retrieves information about an account that's associated with an Amazon Macie administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMemberRequest;
import org.openapis.openapi.models.operations.GetMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMemberRequest req = new GetMemberRequest("provident") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "magnam";
                xAmzDate = "odio";
                xAmzSecurityToken = "eius";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "esse";
            }};            

            GetMemberResponse res = sdk.sdk.getMember(req);

            if (res.getMemberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceProfile

Retrieves (queries) sensitive data discovery statistics and the sensitivity score for an S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceProfileRequest;
import org.openapis.openapi.models.operations.GetResourceProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceProfileRequest req = new GetResourceProfileRequest("fuga") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "fugiat";
                xAmzDate = "ut";
                xAmzSecurityToken = "eum";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "assumenda";
            }};            

            GetResourceProfileResponse res = sdk.sdk.getResourceProfile(req);

            if (res.getResourceProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRevealConfiguration

Retrieves the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRevealConfigurationRequest;
import org.openapis.openapi.models.operations.GetRevealConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRevealConfigurationRequest req = new GetRevealConfigurationRequest() {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "id";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "neque";
            }};            

            GetRevealConfigurationResponse res = sdk.sdk.getRevealConfiguration(req);

            if (res.getRevealConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSensitiveDataOccurrences

Retrieves occurrences of sensitive data reported by a finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSensitiveDataOccurrencesRequest;
import org.openapis.openapi.models.operations.GetSensitiveDataOccurrencesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSensitiveDataOccurrencesRequest req = new GetSensitiveDataOccurrencesRequest("illum") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "eius";
                xAmzDate = "eos";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "cupiditate";
            }};            

            GetSensitiveDataOccurrencesResponse res = sdk.sdk.getSensitiveDataOccurrences(req);

            if (res.getSensitiveDataOccurrencesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSensitiveDataOccurrencesAvailability

Checks whether occurrences of sensitive data can be retrieved for a finding.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSensitiveDataOccurrencesAvailabilityRequest;
import org.openapis.openapi.models.operations.GetSensitiveDataOccurrencesAvailabilityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSensitiveDataOccurrencesAvailabilityRequest req = new GetSensitiveDataOccurrencesAvailabilityRequest("tempora") {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "aspernatur";
                xAmzDate = "sequi";
                xAmzSecurityToken = "quo";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetSensitiveDataOccurrencesAvailabilityResponse res = sdk.sdk.getSensitiveDataOccurrencesAvailability(req);

            if (res.getSensitiveDataOccurrencesAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSensitivityInspectionTemplate

 <p>Retrieves the settings for the sensitivity inspection template for an account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSensitivityInspectionTemplateRequest;
import org.openapis.openapi.models.operations.GetSensitivityInspectionTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSensitivityInspectionTemplateRequest req = new GetSensitivityInspectionTemplateRequest("distinctio") {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "inventore";
                xAmzDate = "nihil";
                xAmzSecurityToken = "totam";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "aliquam";
            }};            

            GetSensitivityInspectionTemplateResponse res = sdk.sdk.getSensitivityInspectionTemplate(req);

            if (res.getSensitivityInspectionTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsageStatistics

Retrieves (queries) quotas and aggregated usage data for one or more accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageStatisticsRequest;
import org.openapis.openapi.models.operations.GetUsageStatisticsRequestBody;
import org.openapis.openapi.models.operations.GetUsageStatisticsRequestBodySortBy;
import org.openapis.openapi.models.operations.GetUsageStatisticsRequestBodyTimeRangeEnum;
import org.openapis.openapi.models.operations.GetUsageStatisticsResponse;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UsageStatisticsFilter;
import org.openapis.openapi.models.shared.UsageStatisticsFilterComparatorEnum;
import org.openapis.openapi.models.shared.UsageStatisticsFilterKeyEnum;
import org.openapis.openapi.models.shared.UsageStatisticsSortKeyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsageStatisticsRequest req = new GetUsageStatisticsRequest(                new GetUsageStatisticsRequestBody() {{
                                filterBy = new org.openapis.openapi.models.shared.UsageStatisticsFilter[]{{
                                    add(new UsageStatisticsFilter() {{
                                        comparator = UsageStatisticsFilterComparatorEnum.LT;
                                        key = UsageStatisticsFilterKeyEnum.TOTAL;
                                        values = new String[]{{
                                            add("deserunt"),
                                        }};
                                    }}),
                                    add(new UsageStatisticsFilter() {{
                                        comparator = UsageStatisticsFilterComparatorEnum.LTE;
                                        key = UsageStatisticsFilterKeyEnum.ACCOUNT_ID;
                                        values = new String[]{{
                                            add("eum"),
                                            add("quas"),
                                            add("praesentium"),
                                            add("consequuntur"),
                                        }};
                                    }}),
                                    add(new UsageStatisticsFilter() {{
                                        comparator = UsageStatisticsFilterComparatorEnum.LTE;
                                        key = UsageStatisticsFilterKeyEnum.ACCOUNT_ID;
                                        values = new String[]{{
                                            add("mollitia"),
                                            add("incidunt"),
                                            add("atque"),
                                        }};
                                    }}),
                                }};
                                maxResults = 128860L;
                                nextToken = "minima";
                                sortBy = new GetUsageStatisticsRequestBodySortBy() {{
                                    key = UsageStatisticsSortKeyEnum.TOTAL;
                                    orderBy = OrderByEnum.ASC;
                                }};;
                                timeRange = GetUsageStatisticsRequestBodyTimeRangeEnum.PAST30_DAYS;
                            }};) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "explicabo";
                xAmzDate = "saepe";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "et";
                maxResults = "esse";
                nextToken = "eveniet";
            }};            

            GetUsageStatisticsResponse res = sdk.sdk.getUsageStatistics(req);

            if (res.getUsageStatisticsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsageTotals

Retrieves (queries) aggregated usage data for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageTotalsRequest;
import org.openapis.openapi.models.operations.GetUsageTotalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsageTotalsRequest req = new GetUsageTotalsRequest() {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quod";
                xAmzDate = "nam";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quasi";
                timeRange = "saepe";
            }};            

            GetUsageTotalsResponse res = sdk.sdk.getUsageTotals(req);

            if (res.getUsageTotalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAllowLists

Retrieves a subset of information about all the allow lists for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAllowListsRequest;
import org.openapis.openapi.models.operations.ListAllowListsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAllowListsRequest req = new ListAllowListsRequest() {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "rerum";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "minima";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "eligendi";
                maxResults = 27069L;
                nextToken = "culpa";
            }};            

            ListAllowListsResponse res = sdk.sdk.listAllowLists(req);

            if (res.listAllowListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClassificationJobs

Retrieves a subset of information about one or more classification jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClassificationJobsRequest;
import org.openapis.openapi.models.operations.ListClassificationJobsRequestBody;
import org.openapis.openapi.models.operations.ListClassificationJobsRequestBodyFilterCriteria;
import org.openapis.openapi.models.operations.ListClassificationJobsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.ListClassificationJobsResponse;
import org.openapis.openapi.models.shared.JobComparatorEnum;
import org.openapis.openapi.models.shared.ListJobsFilterKeyEnum;
import org.openapis.openapi.models.shared.ListJobsFilterTerm;
import org.openapis.openapi.models.shared.ListJobsSortAttributeNameEnum;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClassificationJobsRequest req = new ListClassificationJobsRequest(                new ListClassificationJobsRequestBody() {{
                                filterCriteria = new ListClassificationJobsRequestBodyFilterCriteria() {{
                                    excludes = new org.openapis.openapi.models.shared.ListJobsFilterTerm[]{{
                                        add(new ListJobsFilterTerm() {{
                                            comparator = JobComparatorEnum.CONTAINS;
                                            key = ListJobsFilterKeyEnum.JOB_TYPE;
                                            values = new String[]{{
                                                add("minus"),
                                            }};
                                        }}),
                                    }};
                                    includes = new org.openapis.openapi.models.shared.ListJobsFilterTerm[]{{
                                        add(new ListJobsFilterTerm() {{
                                            comparator = JobComparatorEnum.STARTS_WITH;
                                            key = ListJobsFilterKeyEnum.JOB_TYPE;
                                            values = new String[]{{
                                                add("blanditiis"),
                                                add("provident"),
                                            }};
                                        }}),
                                        add(new ListJobsFilterTerm() {{
                                            comparator = JobComparatorEnum.STARTS_WITH;
                                            key = ListJobsFilterKeyEnum.NAME;
                                            values = new String[]{{
                                                add("esse"),
                                                add("quasi"),
                                                add("a"),
                                            }};
                                        }}),
                                    }};
                                }};;
                                maxResults = 621679L;
                                nextToken = "sint";
                                sortCriteria = new ListClassificationJobsRequestBodySortCriteria() {{
                                    attributeName = ListJobsSortAttributeNameEnum.JOB_TYPE;
                                    orderBy = OrderByEnum.DESC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "asperiores";
                xAmzDate = "facere";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "quasi";
                maxResults = "similique";
                nextToken = "culpa";
            }};            

            ListClassificationJobsResponse res = sdk.sdk.listClassificationJobs(req);

            if (res.listClassificationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listClassificationScopes

Retrieves a subset of information about the classification scope for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListClassificationScopesRequest;
import org.openapis.openapi.models.operations.ListClassificationScopesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListClassificationScopesRequest req = new ListClassificationScopesRequest() {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "quae";
                xAmzCredential = "earum";
                xAmzDate = "vel";
                xAmzSecurityToken = "in";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "libero";
                name = "Gerardo Bartoletti";
                nextToken = "dicta";
            }};            

            ListClassificationScopesResponse res = sdk.sdk.listClassificationScopes(req);

            if (res.listClassificationScopesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomDataIdentifiers

Retrieves a subset of information about all the custom data identifiers for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomDataIdentifiersRequest;
import org.openapis.openapi.models.operations.ListCustomDataIdentifiersRequestBody;
import org.openapis.openapi.models.operations.ListCustomDataIdentifiersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomDataIdentifiersRequest req = new ListCustomDataIdentifiersRequest(                new ListCustomDataIdentifiersRequestBody() {{
                                maxResults = 443879L;
                                nextToken = "ullam";
                            }};) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "aut";
                xAmzCredential = "voluptatum";
                xAmzDate = "qui";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "deleniti";
                maxResults = "itaque";
                nextToken = "dolorum";
            }};            

            ListCustomDataIdentifiersResponse res = sdk.sdk.listCustomDataIdentifiers(req);

            if (res.listCustomDataIdentifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFindings

Retrieves a subset of information about one or more findings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFindingsRequest;
import org.openapis.openapi.models.operations.ListFindingsRequestBody;
import org.openapis.openapi.models.operations.ListFindingsRequestBodyFindingCriteria;
import org.openapis.openapi.models.operations.ListFindingsRequestBodySortCriteria;
import org.openapis.openapi.models.operations.ListFindingsResponse;
import org.openapis.openapi.models.shared.CriterionAdditionalProperties;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFindingsRequest req = new ListFindingsRequest(                new ListFindingsRequestBody() {{
                                findingCriteria = new ListFindingsRequestBodyFindingCriteria() {{
                                    criterion = new java.util.HashMap<String, org.openapis.openapi.models.shared.CriterionAdditionalProperties>() {{
                                        put("tenetur", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("at"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("voluptate"),
                                            }};
                                            gt = 55965L;
                                            gte = 326701L;
                                            lt = 86532L;
                                            lte = 232744L;
                                            neq = new String[]{{
                                                add("iste"),
                                            }};
                                        }});
                                        put("temporibus", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("rem"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("laudantium"),
                                            }};
                                            gt = 428796L;
                                            gte = 649832L;
                                            lt = 68074L;
                                            lte = 544591L;
                                            neq = new String[]{{
                                                add("voluptatem"),
                                                add("dolor"),
                                            }};
                                        }});
                                        put("occaecati", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("impedit"),
                                                add("explicabo"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("aut"),
                                                add("dignissimos"),
                                            }};
                                            gt = 115484L;
                                            gte = 981640L;
                                            lt = 618480L;
                                            lte = 244651L;
                                            neq = new String[]{{
                                                add("voluptas"),
                                                add("asperiores"),
                                                add("aperiam"),
                                                add("ea"),
                                            }};
                                        }});
                                    }};
                                }};;
                                maxResults = 310067L;
                                nextToken = "consequuntur";
                                sortCriteria = new ListFindingsRequestBodySortCriteria() {{
                                    attributeName = "repellendus";
                                    orderBy = OrderByEnum.DESC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "officia";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "quaerat";
                maxResults = "porro";
                nextToken = "quod";
            }};            

            ListFindingsResponse res = sdk.sdk.listFindings(req);

            if (res.listFindingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFindingsFilters

Retrieves a subset of information about all the findings filters for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFindingsFiltersRequest;
import org.openapis.openapi.models.operations.ListFindingsFiltersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFindingsFiltersRequest req = new ListFindingsFiltersRequest() {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "fuga";
                xAmzDate = "id";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "culpa";
                maxResults = 665859L;
                nextToken = "recusandae";
            }};            

            ListFindingsFiltersResponse res = sdk.sdk.listFindingsFilters(req);

            if (res.listFindingsFiltersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInvitations

Retrieves information about the Amazon Macie membership invitations that were received by an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInvitationsRequest;
import org.openapis.openapi.models.operations.ListInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInvitationsRequest req = new ListInvitationsRequest() {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "vel";
                xAmzCredential = "ducimus";
                xAmzDate = "quos";
                xAmzSecurityToken = "vel";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "possimus";
                maxResults = 706575L;
                nextToken = "cum";
            }};            

            ListInvitationsResponse res = sdk.sdk.listInvitations(req);

            if (res.listInvitationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listManagedDataIdentifiers

Retrieves information about all the managed data identifiers that Amazon Macie currently provides.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListManagedDataIdentifiersRequest;
import org.openapis.openapi.models.operations.ListManagedDataIdentifiersRequestBody;
import org.openapis.openapi.models.operations.ListManagedDataIdentifiersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListManagedDataIdentifiersRequest req = new ListManagedDataIdentifiersRequest(                new ListManagedDataIdentifiersRequestBody() {{
                                nextToken = "in";
                            }};) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "assumenda";
                xAmzDate = "nemo";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "aperiam";
                nextToken = "cum";
            }};            

            ListManagedDataIdentifiersResponse res = sdk.sdk.listManagedDataIdentifiers(req);

            if (res.listManagedDataIdentifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMembers

Retrieves information about the accounts that are associated with an Amazon Macie administrator account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMembersRequest;
import org.openapis.openapi.models.operations.ListMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMembersRequest req = new ListMembersRequest() {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "earum";
                xAmzDate = "facere";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "suscipit";
                maxResults = 968972L;
                nextToken = "quidem";
                onlyAssociated = "saepe";
            }};            

            ListMembersResponse res = sdk.sdk.listMembers(req);

            if (res.listMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationAdminAccounts

Retrieves information about the delegated Amazon Macie administrator account for an organization in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationAdminAccountsRequest;
import org.openapis.openapi.models.operations.ListOrganizationAdminAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrganizationAdminAccountsRequest req = new ListOrganizationAdminAccountsRequest() {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "asperiores";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "non";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "beatae";
                maxResults = 489509L;
                nextToken = "a";
            }};            

            ListOrganizationAdminAccountsResponse res = sdk.sdk.listOrganizationAdminAccounts(req);

            if (res.listOrganizationAdminAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceProfileArtifacts

Retrieves information about objects that were selected from an S3 bucket for automated sensitive data discovery.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceProfileArtifactsRequest;
import org.openapis.openapi.models.operations.ListResourceProfileArtifactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceProfileArtifactsRequest req = new ListResourceProfileArtifactsRequest("consectetur") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "harum";
                xAmzCredential = "laboriosam";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "vitae";
                nextToken = "accusamus";
            }};            

            ListResourceProfileArtifactsResponse res = sdk.sdk.listResourceProfileArtifacts(req);

            if (res.listResourceProfileArtifactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResourceProfileDetections

Retrieves information about the types and amount of sensitive data that Amazon Macie found in an S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResourceProfileDetectionsRequest;
import org.openapis.openapi.models.operations.ListResourceProfileDetectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResourceProfileDetectionsRequest req = new ListResourceProfileDetectionsRequest("tempora") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "voluptas";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolorum";
                maxResults = 237807L;
                nextToken = "minus";
            }};            

            ListResourceProfileDetectionsResponse res = sdk.sdk.listResourceProfileDetections(req);

            if (res.listResourceProfileDetectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSensitivityInspectionTemplates

 <p>Retrieves a subset of information about the sensitivity inspection template for an account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSensitivityInspectionTemplatesRequest;
import org.openapis.openapi.models.operations.ListSensitivityInspectionTemplatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSensitivityInspectionTemplatesRequest req = new ListSensitivityInspectionTemplatesRequest() {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "in";
                xAmzCredential = "dolore";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ullam";
                maxResults = 237742L;
                nextToken = "cum";
            }};            

            ListSensitivityInspectionTemplatesResponse res = sdk.sdk.listSensitivityInspectionTemplates(req);

            if (res.listSensitivityInspectionTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Retrieves the tags (keys and values) that are associated with an Amazon Macie resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quas") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "culpa";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "hic";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putClassificationExportConfiguration

Creates or updates the configuration settings for storing data classification results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutClassificationExportConfigurationRequest;
import org.openapis.openapi.models.operations.PutClassificationExportConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutClassificationExportConfigurationRequestBodyConfiguration;
import org.openapis.openapi.models.operations.PutClassificationExportConfigurationResponse;
import org.openapis.openapi.models.shared.S3Destination;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutClassificationExportConfigurationRequest req = new PutClassificationExportConfigurationRequest(                new PutClassificationExportConfigurationRequestBody(                new PutClassificationExportConfigurationRequestBodyConfiguration() {{
                                                s3Destination = new S3Destination("nobis", "sit") {{
                                                    keyPrefix = "rerum";
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "explicabo";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "expedita";
            }};            

            PutClassificationExportConfigurationResponse res = sdk.sdk.putClassificationExportConfiguration(req);

            if (res.putClassificationExportConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFindingsPublicationConfiguration

Updates the configuration settings for publishing findings to Security Hub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFindingsPublicationConfigurationRequest;
import org.openapis.openapi.models.operations.PutFindingsPublicationConfigurationRequestBody;
import org.openapis.openapi.models.operations.PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration;
import org.openapis.openapi.models.operations.PutFindingsPublicationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFindingsPublicationConfigurationRequest req = new PutFindingsPublicationConfigurationRequest(                new PutFindingsPublicationConfigurationRequestBody() {{
                                clientToken = "iste";
                                securityHubConfiguration = new PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration() {{
                                    publishClassificationFindings = false;
                                    publishPolicyFindings = false;
                                }};;
                            }};) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "sed";
                xAmzDate = "in";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "explicabo";
            }};            

            PutFindingsPublicationConfigurationResponse res = sdk.sdk.putFindingsPublicationConfiguration(req);

            if (res.putFindingsPublicationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchResources

Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchResourcesRequest;
import org.openapis.openapi.models.operations.SearchResourcesRequestBody;
import org.openapis.openapi.models.operations.SearchResourcesRequestBodyBucketCriteria;
import org.openapis.openapi.models.operations.SearchResourcesRequestBodySortCriteria;
import org.openapis.openapi.models.operations.SearchResourcesResponse;
import org.openapis.openapi.models.shared.OrderByEnum;
import org.openapis.openapi.models.shared.SearchResourcesComparatorEnum;
import org.openapis.openapi.models.shared.SearchResourcesCriteria;
import org.openapis.openapi.models.shared.SearchResourcesCriteriaBlock;
import org.openapis.openapi.models.shared.SearchResourcesSimpleCriterion;
import org.openapis.openapi.models.shared.SearchResourcesSimpleCriterionKeyEnum;
import org.openapis.openapi.models.shared.SearchResourcesSortAttributeNameEnum;
import org.openapis.openapi.models.shared.SearchResourcesTagCriterion;
import org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchResourcesRequest req = new SearchResourcesRequest(                new SearchResourcesRequestBody() {{
                                bucketCriteria = new SearchResourcesRequestBodyBucketCriteria() {{
                                    excludes = new SearchResourcesCriteriaBlock() {{
                                        and = new org.openapis.openapi.models.shared.SearchResourcesCriteria[]{{
                                            add(new SearchResourcesCriteria() {{
                                                simpleCriterion = new SearchResourcesSimpleCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.EQ;
                                                    key = SearchResourcesSimpleCriterionKeyEnum.S3_BUCKET_NAME;
                                                    values = new String[]{{
                                                        add("debitis"),
                                                        add("illo"),
                                                        add("reiciendis"),
                                                        add("perferendis"),
                                                    }};
                                                }};
                                                tagCriterion = new SearchResourcesTagCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    tagValues = new org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair[]{{
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "incidunt";
                                                            value = "sed";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "provident";
                                                            value = "eius";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "necessitatibus";
                                                            value = "ipsum";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "ea";
                                                            value = "occaecati";
                                                        }}),
                                                    }};
                                                }};
                                            }}),
                                            add(new SearchResourcesCriteria() {{
                                                simpleCriterion = new SearchResourcesSimpleCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    key = SearchResourcesSimpleCriterionKeyEnum.S3_BUCKET_SHARED_ACCESS;
                                                    values = new String[]{{
                                                        add("tempora"),
                                                        add("voluptate"),
                                                    }};
                                                }};
                                                tagCriterion = new SearchResourcesTagCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    tagValues = new org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair[]{{
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "sit";
                                                            value = "non";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "officiis";
                                                            value = "praesentium";
                                                        }}),
                                                    }};
                                                }};
                                            }}),
                                            add(new SearchResourcesCriteria() {{
                                                simpleCriterion = new SearchResourcesSimpleCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    key = SearchResourcesSimpleCriterionKeyEnum.S3_BUCKET_NAME;
                                                    values = new String[]{{
                                                        add("ipsam"),
                                                        add("debitis"),
                                                    }};
                                                }};
                                                tagCriterion = new SearchResourcesTagCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    tagValues = new org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair[]{{
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "nobis";
                                                            value = "error";
                                                        }}),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }};;
                                    includes = new SearchResourcesCriteriaBlock() {{
                                        and = new org.openapis.openapi.models.shared.SearchResourcesCriteria[]{{
                                            add(new SearchResourcesCriteria() {{
                                                simpleCriterion = new SearchResourcesSimpleCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.EQ;
                                                    key = SearchResourcesSimpleCriterionKeyEnum.S3_BUCKET_SHARED_ACCESS;
                                                    values = new String[]{{
                                                        add("nulla"),
                                                        add("magni"),
                                                        add("aperiam"),
                                                        add("saepe"),
                                                    }};
                                                }};
                                                tagCriterion = new SearchResourcesTagCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.EQ;
                                                    tagValues = new org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair[]{{
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "in";
                                                            value = "officiis";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "beatae";
                                                            value = "laudantium";
                                                        }}),
                                                    }};
                                                }};
                                            }}),
                                            add(new SearchResourcesCriteria() {{
                                                simpleCriterion = new SearchResourcesSimpleCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.EQ;
                                                    key = SearchResourcesSimpleCriterionKeyEnum.S3_BUCKET_EFFECTIVE_PERMISSION;
                                                    values = new String[]{{
                                                        add("laboriosam"),
                                                        add("dolorum"),
                                                        add("voluptatum"),
                                                    }};
                                                }};
                                                tagCriterion = new SearchResourcesTagCriterion() {{
                                                    comparator = SearchResourcesComparatorEnum.NE;
                                                    tagValues = new org.openapis.openapi.models.shared.SearchResourcesTagCriterionPair[]{{
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "expedita";
                                                            value = "debitis";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "neque";
                                                            value = "dolorum";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "nostrum";
                                                            value = "officia";
                                                        }}),
                                                        add(new SearchResourcesTagCriterionPair() {{
                                                            key = "dolorum";
                                                            value = "corrupti";
                                                        }}),
                                                    }};
                                                }};
                                            }}),
                                        }};
                                    }};;
                                }};;
                                maxResults = 879235L;
                                nextToken = "tempora";
                                sortCriteria = new SearchResourcesRequestBodySortCriteria() {{
                                    attributeName = SearchResourcesSortAttributeNameEnum.S3_CLASSIFIABLE_OBJECT_COUNT;
                                    orderBy = OrderByEnum.ASC;
                                }};;
                            }};) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "voluptatem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "consequatur";
                maxResults = "esse";
                nextToken = "ipsam";
            }};            

            SearchResourcesResponse res = sdk.sdk.searchResources(req);

            if (res.searchResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds or updates one or more tags (keys and values) that are associated with an Amazon Macie resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("quas", "repudiandae");
                                                put("corporis", "et");
                                                put("blanditiis", "ex");
                                            }});, "sed") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "vel";
                xAmzCredential = "nostrum";
                xAmzDate = "saepe";
                xAmzSecurityToken = "error";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "incidunt";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testCustomDataIdentifier

Tests a custom data identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestCustomDataIdentifierRequest;
import org.openapis.openapi.models.operations.TestCustomDataIdentifierRequestBody;
import org.openapis.openapi.models.operations.TestCustomDataIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestCustomDataIdentifierRequest req = new TestCustomDataIdentifierRequest(                new TestCustomDataIdentifierRequestBody("dolorem", "harum") {{
                                ignoreWords = new String[]{{
                                    add("architecto"),
                                }};
                                keywords = new String[]{{
                                    add("labore"),
                                    add("quidem"),
                                    add("atque"),
                                }};
                                maximumMatchDistance = 671957L;
                            }};) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "laboriosam";
                xAmzDate = "alias";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "voluptate";
            }};            

            TestCustomDataIdentifierResponse res = sdk.sdk.testCustomDataIdentifier(req);

            if (res.testCustomDataIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags (keys and values) from an Amazon Macie resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("reiciendis",                 new String[]{{
                                add("repellendus"),
                                add("delectus"),
                                add("voluptates"),
                            }}) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "quidem";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "facere";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "praesentium";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAllowList

Updates the settings for an allow list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAllowListRequest;
import org.openapis.openapi.models.operations.UpdateAllowListRequestBody;
import org.openapis.openapi.models.operations.UpdateAllowListRequestBodyCriteria;
import org.openapis.openapi.models.operations.UpdateAllowListResponse;
import org.openapis.openapi.models.shared.S3WordsList;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAllowListRequest req = new UpdateAllowListRequest(                new UpdateAllowListRequestBody(                new UpdateAllowListRequestBodyCriteria() {{
                                                regex = "veniam";
                                                s3WordsList = new S3WordsList("voluptatem", "quisquam");;
                                            }};, "repudiandae") {{
                                description = "quasi";
                            }};, "atque") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "totam";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "et";
            }};            

            UpdateAllowListResponse res = sdk.sdk.updateAllowList(req);

            if (res.updateAllowListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAutomatedDiscoveryConfiguration

Enables or disables automated sensitive data discovery for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAutomatedDiscoveryConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateAutomatedDiscoveryConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateAutomatedDiscoveryConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAutomatedDiscoveryConfigurationRequest req = new UpdateAutomatedDiscoveryConfigurationRequest(                new UpdateAutomatedDiscoveryConfigurationRequestBody(UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum.ENABLED);) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ea";
                xAmzCredential = "atque";
                xAmzDate = "error";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "accusamus";
            }};            

            UpdateAutomatedDiscoveryConfigurationResponse res = sdk.sdk.updateAutomatedDiscoveryConfiguration(req);

            if (res.updateAutomatedDiscoveryConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClassificationJob

Changes the status of a classification job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClassificationJobRequest;
import org.openapis.openapi.models.operations.UpdateClassificationJobRequestBody;
import org.openapis.openapi.models.operations.UpdateClassificationJobRequestBodyJobStatusEnum;
import org.openapis.openapi.models.operations.UpdateClassificationJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClassificationJobRequest req = new UpdateClassificationJobRequest(                new UpdateClassificationJobRequestBody(UpdateClassificationJobRequestBodyJobStatusEnum.PAUSED);, "aspernatur") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "corrupti";
                xAmzDate = "at";
                xAmzSecurityToken = "error";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "suscipit";
            }};            

            UpdateClassificationJobResponse res = sdk.sdk.updateClassificationJob(req);

            if (res.updateClassificationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClassificationScope

Updates the classification scope settings for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClassificationScopeRequest;
import org.openapis.openapi.models.operations.UpdateClassificationScopeRequestBody;
import org.openapis.openapi.models.operations.UpdateClassificationScopeRequestBodyS3;
import org.openapis.openapi.models.operations.UpdateClassificationScopeResponse;
import org.openapis.openapi.models.shared.ClassificationScopeUpdateOperationEnum;
import org.openapis.openapi.models.shared.S3ClassificationScopeExclusionUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateClassificationScopeRequest req = new UpdateClassificationScopeRequest(                new UpdateClassificationScopeRequestBody() {{
                                s3 = new UpdateClassificationScopeRequestBodyS3() {{
                                    excludes = new S3ClassificationScopeExclusionUpdate(                new String[]{{
                                                        add("atque"),
                                                        add("sunt"),
                                                        add("recusandae"),
                                                    }}, ClassificationScopeUpdateOperationEnum.REMOVE);;
                                }};;
                            }};, "repellendus") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "doloremque";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "beatae";
            }};            

            UpdateClassificationScopeResponse res = sdk.sdk.updateClassificationScope(req);

            if (res.updateClassificationScopeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFindingsFilter

Updates the criteria and other settings for a findings filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFindingsFilterRequest;
import org.openapis.openapi.models.operations.UpdateFindingsFilterRequestBody;
import org.openapis.openapi.models.operations.UpdateFindingsFilterRequestBodyActionEnum;
import org.openapis.openapi.models.operations.UpdateFindingsFilterRequestBodyFindingCriteria;
import org.openapis.openapi.models.operations.UpdateFindingsFilterResponse;
import org.openapis.openapi.models.shared.CriterionAdditionalProperties;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFindingsFilterRequest req = new UpdateFindingsFilterRequest(                new UpdateFindingsFilterRequestBody() {{
                                action = UpdateFindingsFilterRequestBodyActionEnum.ARCHIVE;
                                clientToken = "laboriosam";
                                description = "velit";
                                findingCriteria = new UpdateFindingsFilterRequestBodyFindingCriteria() {{
                                    criterion = new java.util.HashMap<String, org.openapis.openapi.models.shared.CriterionAdditionalProperties>() {{
                                        put("molestias", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("saepe"),
                                                add("consequuntur"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("officiis"),
                                                add("perspiciatis"),
                                                add("in"),
                                            }};
                                            gt = 238043L;
                                            gte = 907876L;
                                            lt = 580887L;
                                            lte = 160230L;
                                            neq = new String[]{{
                                                add("id"),
                                            }};
                                        }});
                                        put("quis", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("error"),
                                                add("illo"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("quidem"),
                                                add("eveniet"),
                                            }};
                                            gt = 247399L;
                                            gte = 878493L;
                                            lt = 39615L;
                                            lte = 434156L;
                                            neq = new String[]{{
                                                add("totam"),
                                            }};
                                        }});
                                        put("quae", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("eveniet"),
                                                add("qui"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("iure"),
                                                add("necessitatibus"),
                                                add("ratione"),
                                            }};
                                            gt = 672582L;
                                            gte = 715208L;
                                            lt = 528940L;
                                            lte = 523006L;
                                            neq = new String[]{{
                                                add("ad"),
                                                add("repellat"),
                                            }};
                                        }});
                                        put("alias", new CriterionAdditionalProperties() {{
                                            eq = new String[]{{
                                                add("perspiciatis"),
                                                add("nihil"),
                                            }};
                                            eqExactMatch = new String[]{{
                                                add("voluptas"),
                                                add("alias"),
                                                add("maiores"),
                                            }};
                                            gt = 970222L;
                                            gte = 174658L;
                                            lt = 663866L;
                                            lte = 327988L;
                                            neq = new String[]{{
                                                add("dolorum"),
                                                add("nesciunt"),
                                            }};
                                        }});
                                    }};
                                }};;
                                name = "Sophie Mohr";
                                position = 403218L;
                            }};, "ut") {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "debitis";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "eum";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdateFindingsFilterResponse res = sdk.sdk.updateFindingsFilter(req);

            if (res.updateFindingsFilterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMacieSession

Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMacieSessionRequest;
import org.openapis.openapi.models.operations.UpdateMacieSessionRequestBody;
import org.openapis.openapi.models.operations.UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;
import org.openapis.openapi.models.operations.UpdateMacieSessionRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateMacieSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMacieSessionRequest req = new UpdateMacieSessionRequest(                new UpdateMacieSessionRequestBody() {{
                                findingPublishingFrequency = UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum.ONE_HOUR;
                                status = UpdateMacieSessionRequestBodyStatusEnum.PAUSED;
                            }};) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "animi";
            }};            

            UpdateMacieSessionResponse res = sdk.sdk.updateMacieSession(req);

            if (res.updateMacieSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMemberSession

Enables an Amazon Macie administrator to suspend or re-enable Macie for a member account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMemberSessionRequest;
import org.openapis.openapi.models.operations.UpdateMemberSessionRequestBody;
import org.openapis.openapi.models.operations.UpdateMemberSessionRequestBodyStatusEnum;
import org.openapis.openapi.models.operations.UpdateMemberSessionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateMemberSessionRequest req = new UpdateMemberSessionRequest(                new UpdateMemberSessionRequestBody(UpdateMemberSessionRequestBodyStatusEnum.ENABLED);, "provident") {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "animi";
                xAmzCredential = "ex";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "doloribus";
            }};            

            UpdateMemberSessionResponse res = sdk.sdk.updateMemberSession(req);

            if (res.updateMemberSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOrganizationConfiguration

Updates the Amazon Macie configuration settings for an organization in Organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateOrganizationConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOrganizationConfigurationRequest req = new UpdateOrganizationConfigurationRequest(                new UpdateOrganizationConfigurationRequestBody(false);) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "nam";
                xAmzCredential = "earum";
                xAmzDate = "officia";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateOrganizationConfigurationResponse res = sdk.sdk.updateOrganizationConfiguration(req);

            if (res.updateOrganizationConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceProfile

Updates the sensitivity score for an S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceProfileRequest;
import org.openapis.openapi.models.operations.UpdateResourceProfileRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceProfileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceProfileRequest req = new UpdateResourceProfileRequest(                new UpdateResourceProfileRequestBody() {{
                                sensitivityScoreOverride = 564064L;
                            }};, "officiis") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "vitae";
                xAmzDate = "rerum";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "inventore";
            }};            

            UpdateResourceProfileResponse res = sdk.sdk.updateResourceProfile(req);

            if (res.updateResourceProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceProfileDetections

Updates the sensitivity scoring settings for an S3 bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceProfileDetectionsRequest;
import org.openapis.openapi.models.operations.UpdateResourceProfileDetectionsRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceProfileDetectionsResponse;
import org.openapis.openapi.models.shared.DataIdentifierTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuppressDataIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceProfileDetectionsRequest req = new UpdateResourceProfileDetectionsRequest(                new UpdateResourceProfileDetectionsRequestBody() {{
                                suppressDataIdentifiers = new org.openapis.openapi.models.shared.SuppressDataIdentifier[]{{
                                    add(new SuppressDataIdentifier() {{
                                        id = "1032648d-c2f6-4151-99eb-fd0e9fe6c632";
                                        type = DataIdentifierTypeEnum.MANAGED;
                                    }}),
                                    add(new SuppressDataIdentifier() {{
                                        id = "a3aed011-7996-4312-bde0-4771778ff61d";
                                        type = DataIdentifierTypeEnum.CUSTOM;
                                    }}),
                                    add(new SuppressDataIdentifier() {{
                                        id = "17476360-a15d-4b6a-a606-59a1adeaab58";
                                        type = DataIdentifierTypeEnum.CUSTOM;
                                    }}),
                                    add(new SuppressDataIdentifier() {{
                                        id = "1d6c645b-08b6-4189-9baa-0fe1ade008e6";
                                        type = DataIdentifierTypeEnum.MANAGED;
                                    }}),
                                }};
                            }};, "rem") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "asperiores";
                xAmzDate = "ratione";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "illum";
            }};            

            UpdateResourceProfileDetectionsResponse res = sdk.sdk.updateResourceProfileDetections(req);

            if (res.updateResourceProfileDetectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRevealConfiguration

Updates the status and configuration settings for retrieving occurrences of sensitive data reported by findings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRevealConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateRevealConfigurationRequestBody;
import org.openapis.openapi.models.operations.UpdateRevealConfigurationRequestBodyConfiguration;
import org.openapis.openapi.models.operations.UpdateRevealConfigurationResponse;
import org.openapis.openapi.models.shared.RevealStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRevealConfigurationRequest req = new UpdateRevealConfigurationRequest(                new UpdateRevealConfigurationRequestBody(                new UpdateRevealConfigurationRequestBodyConfiguration() {{
                                                kmsKeyId = "impedit";
                                                status = RevealStatusEnum.DISABLED;
                                            }};);) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "culpa";
                xAmzDate = "dolor";
                xAmzSecurityToken = "aliquam";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "deleniti";
            }};            

            UpdateRevealConfigurationResponse res = sdk.sdk.updateRevealConfiguration(req);

            if (res.updateRevealConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSensitivityInspectionTemplate

 <p>Updates the settings for the sensitivity inspection template for an account.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSensitivityInspectionTemplateRequest;
import org.openapis.openapi.models.operations.UpdateSensitivityInspectionTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateSensitivityInspectionTemplateRequestBodyExcludes;
import org.openapis.openapi.models.operations.UpdateSensitivityInspectionTemplateRequestBodyIncludes;
import org.openapis.openapi.models.operations.UpdateSensitivityInspectionTemplateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSensitivityInspectionTemplateRequest req = new UpdateSensitivityInspectionTemplateRequest(                new UpdateSensitivityInspectionTemplateRequestBody() {{
                                description = "tempora";
                                excludes = new UpdateSensitivityInspectionTemplateRequestBodyExcludes() {{
                                    managedDataIdentifierIds = new String[]{{
                                        add("consequatur"),
                                    }};
                                }};;
                                includes = new UpdateSensitivityInspectionTemplateRequestBodyIncludes() {{
                                    allowListIds = new String[]{{
                                        add("sit"),
                                    }};
                                    customDataIdentifierIds = new String[]{{
                                        add("fugit"),
                                        add("ab"),
                                    }};
                                    managedDataIdentifierIds = new String[]{{
                                        add("quae"),
                                        add("dolor"),
                                        add("fugiat"),
                                    }};
                                }};;
                            }};, "ipsam") {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "quas";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "esse";
            }};            

            UpdateSensitivityInspectionTemplateResponse res = sdk.sdk.updateSensitivityInspectionTemplate(req);

            if (res.updateSensitivityInspectionTemplateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
