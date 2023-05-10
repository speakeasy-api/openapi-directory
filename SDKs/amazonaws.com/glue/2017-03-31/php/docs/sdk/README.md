# SDK

## Overview

<fullname>Glue</fullname> <p>Defines the public endpoint for the Glue service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/glue/>
### Available Operations

* [batchCreatePartition](#batchcreatepartition) - Creates one or more partitions in a batch operation.
* [batchDeleteConnection](#batchdeleteconnection) - Deletes a list of connection definitions from the Data Catalog.
* [batchDeletePartition](#batchdeletepartition) - Deletes one or more partitions in a batch operation.
* [batchDeleteTable](#batchdeletetable) - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* [batchDeleteTableVersion](#batchdeletetableversion) - Deletes a specified batch of versions of a table.
* [batchGetBlueprints](#batchgetblueprints) - Retrieves information about a list of blueprints.
* [batchGetCrawlers](#batchgetcrawlers) - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [batchGetCustomEntityTypes](#batchgetcustomentitytypes) - Retrieves the details for the custom patterns specified by a list of names.
* [batchGetDataQualityResult](#batchgetdataqualityresult) - Retrieves a list of data quality results for the specified result IDs.
* [batchGetDevEndpoints](#batchgetdevendpoints) - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [batchGetJobs](#batchgetjobs) - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* [batchGetPartition](#batchgetpartition) - Retrieves partitions in a batch request.
* [batchGetTriggers](#batchgettriggers) - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [batchGetWorkflows](#batchgetworkflows) - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* [batchStopJobRun](#batchstopjobrun) - Stops one or more job runs for a specified job definition.
* [batchUpdatePartition](#batchupdatepartition) - Updates one or more partitions in a batch operation.
* [cancelDataQualityRuleRecommendationRun](#canceldataqualityrulerecommendationrun) - Cancels the specified recommendation run that was being used to generate rules.
* [cancelDataQualityRulesetEvaluationRun](#canceldataqualityrulesetevaluationrun) - Cancels a run where a ruleset is being evaluated against a data source.
* [cancelMLTaskRun](#cancelmltaskrun) - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* [cancelStatement](#cancelstatement) - Cancels the statement.
* [checkSchemaVersionValidity](#checkschemaversionvalidity) - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* [createBlueprint](#createblueprint) - Registers a blueprint with Glue.
* [createClassifier](#createclassifier) - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* [createConnection](#createconnection) - Creates a connection definition in the Data Catalog.
* [createCrawler](#createcrawler) - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* [createCustomEntityType](#createcustomentitytype) - <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
* [createDataQualityRuleset](#createdataqualityruleset) - <p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>
* [createDatabase](#createdatabase) - Creates a new database in a Data Catalog.
* [createDevEndpoint](#createdevendpoint) - Creates a new development endpoint.
* [createJob](#createjob) - Creates a new job definition.
* [createMLTransform](#createmltransform) - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* [createPartition](#createpartition) - Creates a new partition.
* [createPartitionIndex](#createpartitionindex) - Creates a specified partition index in an existing table.
* [createRegistry](#createregistry) - Creates a new registry which may be used to hold a collection of schemas.
* [createSchema](#createschema) - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* [createScript](#createscript) - Transforms a directed acyclic graph (DAG) into code.
* [createSecurityConfiguration](#createsecurityconfiguration) - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* [createSession](#createsession) - Creates a new session.
* [createTable](#createtable) - Creates a new table definition in the Data Catalog.
* [createTrigger](#createtrigger) - Creates a new trigger.
* [createUserDefinedFunction](#createuserdefinedfunction) - Creates a new function definition in the Data Catalog.
* [createWorkflow](#createworkflow) - Creates a new workflow.
* [deleteBlueprint](#deleteblueprint) - Deletes an existing blueprint.
* [deleteClassifier](#deleteclassifier) - Removes a classifier from the Data Catalog.
* [deleteColumnStatisticsForPartition](#deletecolumnstatisticsforpartition) - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* [deleteColumnStatisticsForTable](#deletecolumnstatisticsfortable) - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* [deleteConnection](#deleteconnection) - Deletes a connection from the Data Catalog.
* [deleteCrawler](#deletecrawler) - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* [deleteCustomEntityType](#deletecustomentitytype) - Deletes a custom pattern by specifying its name.
* [deleteDataQualityRuleset](#deletedataqualityruleset) - Deletes a data quality ruleset.
* [deleteDatabase](#deletedatabase) - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* [deleteDevEndpoint](#deletedevendpoint) - Deletes a specified development endpoint.
* [deleteJob](#deletejob) - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* [deleteMLTransform](#deletemltransform) - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* [deletePartition](#deletepartition) - Deletes a specified partition.
* [deletePartitionIndex](#deletepartitionindex) - Deletes a specified partition index from an existing table.
* [deleteRegistry](#deleteregistry) - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a specified policy.
* [deleteSchema](#deleteschema) - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* [deleteSchemaVersions](#deleteschemaversions) - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* [deleteSecurityConfiguration](#deletesecurityconfiguration) - Deletes a specified security configuration.
* [deleteSession](#deletesession) - Deletes the session.
* [deleteTable](#deletetable) - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* [deleteTableVersion](#deletetableversion) - Deletes a specified version of a table.
* [deleteTrigger](#deletetrigger) - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* [deleteUserDefinedFunction](#deleteuserdefinedfunction) - Deletes an existing function definition from the Data Catalog.
* [deleteWorkflow](#deleteworkflow) - Deletes a workflow.
* [getBlueprint](#getblueprint) - Retrieves the details of a blueprint.
* [getBlueprintRun](#getblueprintrun) - Retrieves the details of a blueprint run.
* [getBlueprintRuns](#getblueprintruns) - Retrieves the details of blueprint runs for a specified blueprint.
* [getCatalogImportStatus](#getcatalogimportstatus) - Retrieves the status of a migration operation.
* [getClassifier](#getclassifier) - Retrieve a classifier by name.
* [getClassifiers](#getclassifiers) - Lists all classifier objects in the Data Catalog.
* [getColumnStatisticsForPartition](#getcolumnstatisticsforpartition) - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* [getColumnStatisticsForTable](#getcolumnstatisticsfortable) - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* [getConnection](#getconnection) - Retrieves a connection definition from the Data Catalog.
* [getConnections](#getconnections) - Retrieves a list of connection definitions from the Data Catalog.
* [getCrawler](#getcrawler) - Retrieves metadata for a specified crawler.
* [getCrawlerMetrics](#getcrawlermetrics) - Retrieves metrics about specified crawlers.
* [getCrawlers](#getcrawlers) - Retrieves metadata for all crawlers defined in the customer account.
* [getCustomEntityType](#getcustomentitytype) - Retrieves the details of a custom pattern by specifying its name.
* [getDataCatalogEncryptionSettings](#getdatacatalogencryptionsettings) - Retrieves the security configuration for a specified catalog.
* [getDataQualityResult](#getdataqualityresult) - Retrieves the result of a data quality rule evaluation.
* [getDataQualityRuleRecommendationRun](#getdataqualityrulerecommendationrun) - Gets the specified recommendation run that was used to generate rules.
* [getDataQualityRuleset](#getdataqualityruleset) - Returns an existing ruleset by identifier or name.
* [getDataQualityRulesetEvaluationRun](#getdataqualityrulesetevaluationrun) - Retrieves a specific run where a ruleset is evaluated against a data source.
* [getDatabase](#getdatabase) - Retrieves the definition of a specified database.
* [getDatabases](#getdatabases) - Retrieves all databases defined in a given Data Catalog.
* [getDataflowGraph](#getdataflowgraph) - Transforms a Python script into a directed acyclic graph (DAG). 
* [getDevEndpoint](#getdevendpoint) - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* [getDevEndpoints](#getdevendpoints) - <p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* [getJob](#getjob) - Retrieves an existing job definition.
* [getJobBookmark](#getjobbookmark) - <p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* [getJobRun](#getjobrun) - Retrieves the metadata for a given job run.
* [getJobRuns](#getjobruns) - Retrieves metadata for all runs of a given job definition.
* [getJobs](#getjobs) - Retrieves all current job definitions.
* [getMLTaskRun](#getmltaskrun) - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* [getMLTaskRuns](#getmltaskruns) - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* [getMLTransform](#getmltransform) - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* [getMLTransforms](#getmltransforms) - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* [getMapping](#getmapping) - Creates mappings.
* [getPartition](#getpartition) - Retrieves information about a specified partition.
* [getPartitionIndexes](#getpartitionindexes) - Retrieves the partition indexes associated with a table.
* [getPartitions](#getpartitions) - Retrieves information about the partitions in a table.
* [getPlan](#getplan) - Gets code to perform a specified mapping.
* [getRegistry](#getregistry) - Describes the specified registry in detail.
* [getResourcePolicies](#getresourcepolicies) - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* [getResourcePolicy](#getresourcepolicy) - Retrieves a specified resource policy.
* [getSchema](#getschema) - Describes the specified schema in detail.
* [getSchemaByDefinition](#getschemabydefinition) - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* [getSchemaVersion](#getschemaversion) - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* [getSchemaVersionsDiff](#getschemaversionsdiff) - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* [getSecurityConfiguration](#getsecurityconfiguration) - Retrieves a specified security configuration.
* [getSecurityConfigurations](#getsecurityconfigurations) - Retrieves a list of all security configurations.
* [getSession](#getsession) - Retrieves the session.
* [getStatement](#getstatement) - Retrieves the statement.
* [getTable](#gettable) - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* [getTableVersion](#gettableversion) - Retrieves a specified version of a table.
* [getTableVersions](#gettableversions) - Retrieves a list of strings that identify available versions of a specified table.
* [getTables](#gettables) - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* [getTags](#gettags) - Retrieves a list of tags associated with a resource.
* [getTrigger](#gettrigger) - Retrieves the definition of a trigger.
* [getTriggers](#gettriggers) - Gets all the triggers associated with a job.
* [getUnfilteredPartitionMetadata](#getunfilteredpartitionmetadata) - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
* [getUnfilteredPartitionsMetadata](#getunfilteredpartitionsmetadata) - <p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
* [getUnfilteredTableMetadata](#getunfilteredtablemetadata) - <p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
* [getUserDefinedFunction](#getuserdefinedfunction) - Retrieves a specified function definition from the Data Catalog.
* [getUserDefinedFunctions](#getuserdefinedfunctions) - Retrieves multiple function definitions from the Data Catalog.
* [getWorkflow](#getworkflow) - Retrieves resource metadata for a workflow.
* [getWorkflowRun](#getworkflowrun) - Retrieves the metadata for a given workflow run. 
* [getWorkflowRunProperties](#getworkflowrunproperties) - Retrieves the workflow run properties which were set during the run.
* [getWorkflowRuns](#getworkflowruns) - Retrieves metadata for all runs of a given workflow.
* [importCatalogToGlue](#importcatalogtoglue) - Imports an existing Amazon Athena Data Catalog to Glue.
* [listBlueprints](#listblueprints) - Lists all the blueprint names in an account.
* [listCrawlers](#listcrawlers) - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [listCrawls](#listcrawls) - <p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>
* [listCustomEntityTypes](#listcustomentitytypes) - Lists all the custom patterns that have been created.
* [listDataQualityResults](#listdataqualityresults) - Returns all data quality execution results for your account.
* [listDataQualityRuleRecommendationRuns](#listdataqualityrulerecommendationruns) - Lists the recommendation runs meeting the filter criteria.
* [listDataQualityRulesetEvaluationRuns](#listdataqualityrulesetevaluationruns) - Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.
* [listDataQualityRulesets](#listdataqualityrulesets) - Returns a paginated list of rulesets for the specified list of Glue tables.
* [listDevEndpoints](#listdevendpoints) - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [listJobs](#listjobs) - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [listMLTransforms](#listmltransforms) -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* [listRegistries](#listregistries) - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* [listSchemaVersions](#listschemaversions) - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* [listSchemas](#listschemas) - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* [listSessions](#listsessions) - Retrieve a list of sessions.
* [listStatements](#liststatements) - Lists statements for the session.
* [listTriggers](#listtriggers) - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* [listWorkflows](#listworkflows) - Lists names of workflows created in the account.
* [putDataCatalogEncryptionSettings](#putdatacatalogencryptionsettings) - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* [putResourcePolicy](#putresourcepolicy) - Sets the Data Catalog resource policy for access control.
* [putSchemaVersionMetadata](#putschemaversionmetadata) - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* [putWorkflowRunProperties](#putworkflowrunproperties) - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* [querySchemaVersionMetadata](#queryschemaversionmetadata) - Queries for the schema version metadata information. 
* [registerSchemaVersion](#registerschemaversion) - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* [removeSchemaVersionMetadata](#removeschemaversionmetadata) - Removes a key value pair from the schema version metadata for the specified schema version ID.
* [resetJobBookmark](#resetjobbookmark) - <p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>
* [resumeWorkflowRun](#resumeworkflowrun) - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* [runStatement](#runstatement) - Executes the statement.
* [searchTables](#searchtables) - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* [startBlueprintRun](#startblueprintrun) - Starts a new run of the specified blueprint.
* [startCrawler](#startcrawler) - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* [startCrawlerSchedule](#startcrawlerschedule) - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* [startDataQualityRuleRecommendationRun](#startdataqualityrulerecommendationrun) - Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.
* [startDataQualityRulesetEvaluationRun](#startdataqualityrulesetevaluationrun) - Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.
* [startExportLabelsTaskRun](#startexportlabelstaskrun) - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* [startImportLabelsTaskRun](#startimportlabelstaskrun) - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* [startJobRun](#startjobrun) - Starts a job run using a job definition.
* [startMLEvaluationTaskRun](#startmlevaluationtaskrun) - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* [startMLLabelingSetGenerationTaskRun](#startmllabelingsetgenerationtaskrun) - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* [startTrigger](#starttrigger) - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* [startWorkflowRun](#startworkflowrun) - Starts a new run of the specified workflow.
* [stopCrawler](#stopcrawler) - If the specified crawler is running, stops the crawl.
* [stopCrawlerSchedule](#stopcrawlerschedule) - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* [stopSession](#stopsession) - Stops the session.
* [stopTrigger](#stoptrigger) - Stops a specified trigger.
* [stopWorkflowRun](#stopworkflowrun) - Stops the execution of the specified workflow run.
* [tagResource](#tagresource) - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* [untagResource](#untagresource) - Removes tags from a resource.
* [updateBlueprint](#updateblueprint) - Updates a registered blueprint.
* [updateClassifier](#updateclassifier) - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* [updateColumnStatisticsForPartition](#updatecolumnstatisticsforpartition) - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* [updateColumnStatisticsForTable](#updatecolumnstatisticsfortable) - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* [updateConnection](#updateconnection) - Updates a connection definition in the Data Catalog.
* [updateCrawler](#updatecrawler) - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* [updateCrawlerSchedule](#updatecrawlerschedule) - Updates the schedule of a crawler using a <code>cron</code> expression. 
* [updateDataQualityRuleset](#updatedataqualityruleset) - Updates the specified data quality ruleset.
* [updateDatabase](#updatedatabase) - Updates an existing database definition in a Data Catalog.
* [updateDevEndpoint](#updatedevendpoint) - Updates a specified development endpoint.
* [updateJob](#updatejob) - Updates an existing job definition. The previous job definition is completely overwritten by this information.
* [updateJobFromSourceControl](#updatejobfromsourcecontrol) - <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>
* [updateMLTransform](#updatemltransform) - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* [updatePartition](#updatepartition) - Updates a partition.
* [updateRegistry](#updateregistry) - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* [updateSchema](#updateschema) - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* [updateSourceControlFromJob](#updatesourcecontrolfromjob) - <p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>
* [updateTable](#updatetable) - Updates a metadata table in the Data Catalog.
* [updateTrigger](#updatetrigger) - Updates a trigger definition.
* [updateUserDefinedFunction](#updateuserdefinedfunction) - Updates an existing function definition in the Data Catalog.
* [updateWorkflow](#updateworkflow) - Updates an existing workflow.

## batchCreatePartition

Creates one or more partitions in a batch operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Operations\BatchCreatePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchCreatePartitionRequest();
    $request->batchCreatePartitionRequest = new BatchCreatePartitionRequest();
    $request->batchCreatePartitionRequest->catalogId = 'suscipit';
    $request->batchCreatePartitionRequest->databaseName = 'iure';
    $request->batchCreatePartitionRequest->partitionInputList = [
        new PartitionInput(),
        new PartitionInput(),
    ];
    $request->batchCreatePartitionRequest->tableName = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = BatchCreatePartitionXAmzTargetEnum::AWS_GLUE_BATCH_CREATE_PARTITION;

    $response = $sdk->sdk->batchCreatePartition($request);

    if ($response->batchCreatePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteConnection

Deletes a list of connection definitions from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteConnectionRequest();
    $request->batchDeleteConnectionRequest = new BatchDeleteConnectionRequest();
    $request->batchDeleteConnectionRequest->catalogId = 'voluptatum';
    $request->batchDeleteConnectionRequest->connectionNameList = [
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = BatchDeleteConnectionXAmzTargetEnum::AWS_GLUE_BATCH_DELETE_CONNECTION;

    $response = $sdk->sdk->batchDeleteConnection($request);

    if ($response->batchDeleteConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeletePartition

Deletes one or more partitions in a batch operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeletePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeletePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionValueList;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeletePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeletePartitionRequest();
    $request->batchDeletePartitionRequest = new BatchDeletePartitionRequest();
    $request->batchDeletePartitionRequest->catalogId = 'ipsam';
    $request->batchDeletePartitionRequest->databaseName = 'repellendus';
    $request->batchDeletePartitionRequest->partitionsToDelete = [
        new PartitionValueList(),
        new PartitionValueList(),
        new PartitionValueList(),
        new PartitionValueList(),
    ];
    $request->batchDeletePartitionRequest->tableName = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = BatchDeletePartitionXAmzTargetEnum::AWS_GLUE_BATCH_DELETE_PARTITION;

    $response = $sdk->sdk->batchDeletePartition($request);

    if ($response->batchDeletePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteTable

<p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteTableRequest();
    $request->batchDeleteTableRequest = new BatchDeleteTableRequest();
    $request->batchDeleteTableRequest->catalogId = 'esse';
    $request->batchDeleteTableRequest->databaseName = 'totam';
    $request->batchDeleteTableRequest->tablesToDelete = [
        'dolorum',
        'dicta',
        'nam',
        'officia',
    ];
    $request->batchDeleteTableRequest->transactionId = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = BatchDeleteTableXAmzTargetEnum::AWS_GLUE_BATCH_DELETE_TABLE;

    $response = $sdk->sdk->batchDeleteTable($request);

    if ($response->batchDeleteTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchDeleteTableVersion

Deletes a specified batch of versions of a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteTableVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteTableVersionRequest();
    $request->batchDeleteTableVersionRequest = new BatchDeleteTableVersionRequest();
    $request->batchDeleteTableVersionRequest->catalogId = 'molestiae';
    $request->batchDeleteTableVersionRequest->databaseName = 'modi';
    $request->batchDeleteTableVersionRequest->tableName = 'qui';
    $request->batchDeleteTableVersionRequest->versionIds = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = BatchDeleteTableVersionXAmzTargetEnum::AWS_GLUE_BATCH_DELETE_TABLE_VERSION;

    $response = $sdk->sdk->batchDeleteTableVersion($request);

    if ($response->batchDeleteTableVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetBlueprints

Retrieves information about a list of blueprints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBlueprintsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetBlueprintsRequest();
    $request->batchGetBlueprintsRequest = new BatchGetBlueprintsRequest();
    $request->batchGetBlueprintsRequest->includeBlueprint = false;
    $request->batchGetBlueprintsRequest->includeParameterSpec = false;
    $request->batchGetBlueprintsRequest->names = [
        'laboriosam',
        'hic',
        'saepe',
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = BatchGetBlueprintsXAmzTargetEnum::AWS_GLUE_BATCH_GET_BLUEPRINTS;

    $response = $sdk->sdk->batchGetBlueprints($request);

    if ($response->batchGetBlueprintsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetCrawlers

Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCrawlersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCrawlersRequest();
    $request->batchGetCrawlersRequest = new BatchGetCrawlersRequest();
    $request->batchGetCrawlersRequest->crawlerNames = [
        'ipsa',
    ];
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = BatchGetCrawlersXAmzTargetEnum::AWS_GLUE_BATCH_GET_CRAWLERS;

    $response = $sdk->sdk->batchGetCrawlers($request);

    if ($response->batchGetCrawlersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetCustomEntityTypes

Retrieves the details for the custom patterns specified by a list of names.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCustomEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetCustomEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetCustomEntityTypesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetCustomEntityTypesRequest();
    $request->batchGetCustomEntityTypesRequest = new BatchGetCustomEntityTypesRequest();
    $request->batchGetCustomEntityTypesRequest->names = [
        'nobis',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = BatchGetCustomEntityTypesXAmzTargetEnum::AWS_GLUE_BATCH_GET_CUSTOM_ENTITY_TYPES;

    $response = $sdk->sdk->batchGetCustomEntityTypes($request);

    if ($response->batchGetCustomEntityTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDataQualityResult

Retrieves a list of data quality results for the specified result IDs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDataQualityResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDataQualityResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDataQualityResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDataQualityResultRequest();
    $request->batchGetDataQualityResultRequest = new BatchGetDataQualityResultRequest();
    $request->batchGetDataQualityResultRequest->resultIds = [
        'doloribus',
        'sapiente',
        'architecto',
    ];
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = BatchGetDataQualityResultXAmzTargetEnum::AWS_GLUE_BATCH_GET_DATA_QUALITY_RESULT;

    $response = $sdk->sdk->batchGetDataQualityResult($request);

    if ($response->batchGetDataQualityResultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetDevEndpoints

Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetDevEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetDevEndpointsRequest();
    $request->batchGetDevEndpointsRequest = new BatchGetDevEndpointsRequest();
    $request->batchGetDevEndpointsRequest->devEndpointNames = [
        'commodi',
        'quam',
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = BatchGetDevEndpointsXAmzTargetEnum::AWS_GLUE_BATCH_GET_DEV_ENDPOINTS;

    $response = $sdk->sdk->batchGetDevEndpoints($request);

    if ($response->batchGetDevEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetJobs

Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetJobsRequest();
    $request->batchGetJobsRequest = new BatchGetJobsRequest();
    $request->batchGetJobsRequest->jobNames = [
        'enim',
        'odit',
        'quo',
    ];
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = BatchGetJobsXAmzTargetEnum::AWS_GLUE_BATCH_GET_JOBS;

    $response = $sdk->sdk->batchGetJobs($request);

    if ($response->batchGetJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetPartition

Retrieves partitions in a batch request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionValueList;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetPartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetPartitionRequest();
    $request->batchGetPartitionRequest = new BatchGetPartitionRequest();
    $request->batchGetPartitionRequest->catalogId = 'error';
    $request->batchGetPartitionRequest->databaseName = 'temporibus';
    $request->batchGetPartitionRequest->partitionsToGet = [
        new PartitionValueList(),
        new PartitionValueList(),
        new PartitionValueList(),
    ];
    $request->batchGetPartitionRequest->tableName = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = BatchGetPartitionXAmzTargetEnum::AWS_GLUE_BATCH_GET_PARTITION;

    $response = $sdk->sdk->batchGetPartition($request);

    if ($response->batchGetPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetTriggers

Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetTriggersRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetTriggersRequest();
    $request->batchGetTriggersRequest = new BatchGetTriggersRequest();
    $request->batchGetTriggersRequest->triggerNames = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'doloremque';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = BatchGetTriggersXAmzTargetEnum::AWS_GLUE_BATCH_GET_TRIGGERS;

    $response = $sdk->sdk->batchGetTriggers($request);

    if ($response->batchGetTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetWorkflows

Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetWorkflowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetWorkflowsRequest();
    $request->batchGetWorkflowsRequest = new BatchGetWorkflowsRequest();
    $request->batchGetWorkflowsRequest->includeGraph = false;
    $request->batchGetWorkflowsRequest->names = [
        'dicta',
        'harum',
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = BatchGetWorkflowsXAmzTargetEnum::AWS_GLUE_BATCH_GET_WORKFLOWS;

    $response = $sdk->sdk->batchGetWorkflows($request);

    if ($response->batchGetWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchStopJobRun

Stops one or more job runs for a specified job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchStopJobRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchStopJobRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchStopJobRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchStopJobRunRequest();
    $request->batchStopJobRunRequest = new BatchStopJobRunRequest();
    $request->batchStopJobRunRequest->jobName = 'molestias';
    $request->batchStopJobRunRequest->jobRunIds = [
        'pariatur',
        'modi',
        'praesentium',
    ];
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = BatchStopJobRunXAmzTargetEnum::AWS_GLUE_BATCH_STOP_JOB_RUN;

    $response = $sdk->sdk->batchStopJobRun($request);

    if ($response->batchStopJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchUpdatePartition

Updates one or more partitions in a batch operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdatePartitionRequestEntry;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Operations\BatchUpdatePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchUpdatePartitionRequest();
    $request->batchUpdatePartitionRequest = new BatchUpdatePartitionRequest();
    $request->batchUpdatePartitionRequest->catalogId = 'incidunt';
    $request->batchUpdatePartitionRequest->databaseName = 'enim';
    $request->batchUpdatePartitionRequest->entries = [
        new BatchUpdatePartitionRequestEntry(),
    ];
    $request->batchUpdatePartitionRequest->tableName = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = BatchUpdatePartitionXAmzTargetEnum::AWS_GLUE_BATCH_UPDATE_PARTITION;

    $response = $sdk->sdk->batchUpdatePartition($request);

    if ($response->batchUpdatePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDataQualityRuleRecommendationRun

Cancels the specified recommendation run that was being used to generate rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataQualityRuleRecommendationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDataQualityRuleRecommendationRunRequest();
    $request->cancelDataQualityRuleRecommendationRunRequest = new CancelDataQualityRuleRecommendationRunRequest();
    $request->cancelDataQualityRuleRecommendationRunRequest->runId = 'qui';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CancelDataQualityRuleRecommendationRunXAmzTargetEnum::AWS_GLUE_CANCEL_DATA_QUALITY_RULE_RECOMMENDATION_RUN;

    $response = $sdk->sdk->cancelDataQualityRuleRecommendationRun($request);

    if ($response->cancelDataQualityRuleRecommendationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelDataQualityRulesetEvaluationRun

Cancels a run where a ruleset is being evaluated against a data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelDataQualityRulesetEvaluationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelDataQualityRulesetEvaluationRunRequest();
    $request->cancelDataQualityRulesetEvaluationRunRequest = new CancelDataQualityRulesetEvaluationRunRequest();
    $request->cancelDataQualityRulesetEvaluationRunRequest->runId = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CancelDataQualityRulesetEvaluationRunXAmzTargetEnum::AWS_GLUE_CANCEL_DATA_QUALITY_RULESET_EVALUATION_RUN;

    $response = $sdk->sdk->cancelDataQualityRulesetEvaluationRun($request);

    if ($response->cancelDataQualityRulesetEvaluationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelMLTaskRun

Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelMLTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelMLTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelMLTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelMLTaskRunRequest();
    $request->cancelMLTaskRunRequest = new CancelMLTaskRunRequest();
    $request->cancelMLTaskRunRequest->taskRunId = 'delectus';
    $request->cancelMLTaskRunRequest->transformId = 'eum';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = CancelMLTaskRunXAmzTargetEnum::AWS_GLUE_CANCEL_ML_TASK_RUN;

    $response = $sdk->sdk->cancelMLTaskRun($request);

    if ($response->cancelMLTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelStatement

Cancels the statement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CancelStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelStatementRequest();
    $request->cancelStatementRequest = new CancelStatementRequest();
    $request->cancelStatementRequest->id = 638921;
    $request->cancelStatementRequest->requestOrigin = 'dolor';
    $request->cancelStatementRequest->sessionId = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = CancelStatementXAmzTargetEnum::AWS_GLUE_CANCEL_STATEMENT;

    $response = $sdk->sdk->cancelStatement($request);

    if ($response->cancelStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkSchemaVersionValidity

Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckSchemaVersionValidityRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckSchemaVersionValidityInput;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\CheckSchemaVersionValidityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckSchemaVersionValidityRequest();
    $request->checkSchemaVersionValidityInput = new CheckSchemaVersionValidityInput();
    $request->checkSchemaVersionValidityInput->dataFormat = DataFormatEnum::AVRO;
    $request->checkSchemaVersionValidityInput->schemaDefinition = 'magnam';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = CheckSchemaVersionValidityXAmzTargetEnum::AWS_GLUE_CHECK_SCHEMA_VERSION_VALIDITY;

    $response = $sdk->sdk->checkSchemaVersionValidity($request);

    if ($response->checkSchemaVersionValidityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBlueprint

Registers a blueprint with Glue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBlueprintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBlueprintRequest();
    $request->createBlueprintRequest = new CreateBlueprintRequest();
    $request->createBlueprintRequest->blueprintLocation = 'occaecati';
    $request->createBlueprintRequest->description = 'enim';
    $request->createBlueprintRequest->name = 'Toby Pouros';
    $request->createBlueprintRequest->tags = [
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
        'deserunt' => 'nisi',
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = CreateBlueprintXAmzTargetEnum::AWS_GLUE_CREATE_BLUEPRINT;

    $response = $sdk->sdk->createBlueprint($request);

    if ($response->createBlueprintResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createClassifier

Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCsvClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CsvHeaderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateGrokClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateJsonClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateXMLClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateClassifierRequest();
    $request->createClassifierRequest = new CreateClassifierRequest();
    $request->createClassifierRequest->csvClassifier = new CreateCsvClassifierRequest();
    $request->createClassifierRequest->csvClassifier->allowSingleColumn = false;
    $request->createClassifierRequest->csvClassifier->containsHeader = CsvHeaderOptionEnum::ABSENT;
    $request->createClassifierRequest->csvClassifier->customDatatypeConfigured = false;
    $request->createClassifierRequest->csvClassifier->customDatatypes = [
        'labore',
        'labore',
        'suscipit',
    ];
    $request->createClassifierRequest->csvClassifier->delimiter = 'natus';
    $request->createClassifierRequest->csvClassifier->disableValueTrimming = false;
    $request->createClassifierRequest->csvClassifier->header = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->createClassifierRequest->csvClassifier->name = 'Danielle Bosco';
    $request->createClassifierRequest->csvClassifier->quoteSymbol = 'provident';
    $request->createClassifierRequest->grokClassifier = new CreateGrokClassifierRequest();
    $request->createClassifierRequest->grokClassifier->classification = 'quos';
    $request->createClassifierRequest->grokClassifier->customPatterns = 'sint';
    $request->createClassifierRequest->grokClassifier->grokPattern = 'accusantium';
    $request->createClassifierRequest->grokClassifier->name = 'Abel O'Hara';
    $request->createClassifierRequest->jsonClassifier = new CreateJsonClassifierRequest();
    $request->createClassifierRequest->jsonClassifier->jsonPath = 'dolor';
    $request->createClassifierRequest->jsonClassifier->name = 'Ms. Fred Hilll';
    $request->createClassifierRequest->xmlClassifier = new CreateXMLClassifierRequest();
    $request->createClassifierRequest->xmlClassifier->classification = 'debitis';
    $request->createClassifierRequest->xmlClassifier->name = 'Jasmine Lind';
    $request->createClassifierRequest->xmlClassifier->rowTag = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = CreateClassifierXAmzTargetEnum::AWS_GLUE_CREATE_CLASSIFIER;

    $response = $sdk->sdk->createClassifier($request);

    if ($response->createClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnection

Creates a connection definition in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalConnectionRequirements;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionRequest = new CreateConnectionRequest();
    $request->createConnectionRequest->catalogId = 'sed';
    $request->createConnectionRequest->connectionInput = new ConnectionInput();
    $request->createConnectionRequest->connectionInput->connectionProperties = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];
    $request->createConnectionRequest->connectionInput->connectionType = ConnectionTypeEnum::MARKETPLACE;
    $request->createConnectionRequest->connectionInput->description = 'pariatur';
    $request->createConnectionRequest->connectionInput->matchCriteria = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->createConnectionRequest->connectionInput->name = 'Virginia Wunsch';
    $request->createConnectionRequest->connectionInput->physicalConnectionRequirements = new PhysicalConnectionRequirements();
    $request->createConnectionRequest->connectionInput->physicalConnectionRequirements->availabilityZone = 'voluptate';
    $request->createConnectionRequest->connectionInput->physicalConnectionRequirements->securityGroupIdList = [
        'nam',
        'eaque',
    ];
    $request->createConnectionRequest->connectionInput->physicalConnectionRequirements->subnetId = 'pariatur';
    $request->createConnectionRequest->tags = [
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::AWS_GLUE_CREATE_CONNECTION;

    $response = $sdk->sdk->createConnection($request);

    if ($response->createConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCrawler

Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\LakeFormationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LineageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrawlerLineageSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecrawlPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RecrawlBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\CrawlerTargets;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTarget;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBTarget;
use \OpenAPI\OpenAPI\Models\Shared\JdbcTarget;
use \OpenAPI\OpenAPI\Models\Shared\JdbcMetadataEntryEnum;
use \OpenAPI\OpenAPI\Models\Shared\MongoDBTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3Target;
use \OpenAPI\OpenAPI\Models\Operations\CreateCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCrawlerRequest();
    $request->createCrawlerRequest = new CreateCrawlerRequest();
    $request->createCrawlerRequest->classifiers = [
        'totam',
        'dignissimos',
    ];
    $request->createCrawlerRequest->configuration = 'eaque';
    $request->createCrawlerRequest->crawlerSecurityConfiguration = 'quis';
    $request->createCrawlerRequest->databaseName = 'nesciunt';
    $request->createCrawlerRequest->description = 'eos';
    $request->createCrawlerRequest->lakeFormationConfiguration = new LakeFormationConfiguration();
    $request->createCrawlerRequest->lakeFormationConfiguration->accountId = 'perferendis';
    $request->createCrawlerRequest->lakeFormationConfiguration->useLakeFormationCredentials = false;
    $request->createCrawlerRequest->lineageConfiguration = new LineageConfiguration();
    $request->createCrawlerRequest->lineageConfiguration->crawlerLineageSettings = CrawlerLineageSettingsEnum::ENABLE;
    $request->createCrawlerRequest->name = 'Darryl Fadel';
    $request->createCrawlerRequest->recrawlPolicy = new RecrawlPolicy();
    $request->createCrawlerRequest->recrawlPolicy->recrawlBehavior = RecrawlBehaviorEnum::CRAWL_EVENT_MODE;
    $request->createCrawlerRequest->role = 'recusandae';
    $request->createCrawlerRequest->schedule = 'omnis';
    $request->createCrawlerRequest->schemaChangePolicy = new SchemaChangePolicy();
    $request->createCrawlerRequest->schemaChangePolicy->deleteBehavior = DeleteBehaviorEnum::DEPRECATE_IN_DATABASE;
    $request->createCrawlerRequest->schemaChangePolicy->updateBehavior = UpdateBehaviorEnum::UPDATE_IN_DATABASE;
    $request->createCrawlerRequest->tablePrefix = 'voluptatem';
    $request->createCrawlerRequest->tags = [
        'consequuntur' => 'blanditiis',
        'error' => 'eaque',
        'occaecati' => 'rerum',
        'adipisci' => 'asperiores',
    ];
    $request->createCrawlerRequest->targets = new CrawlerTargets();
    $request->createCrawlerRequest->targets->catalogTargets = [
        new CatalogTarget(),
        new CatalogTarget(),
        new CatalogTarget(),
        new CatalogTarget(),
    ];
    $request->createCrawlerRequest->targets->deltaTargets = [
        new DeltaTarget(),
        new DeltaTarget(),
    ];
    $request->createCrawlerRequest->targets->dynamoDBTargets = [
        new DynamoDBTarget(),
        new DynamoDBTarget(),
        new DynamoDBTarget(),
    ];
    $request->createCrawlerRequest->targets->jdbcTargets = [
        new JdbcTarget(),
        new JdbcTarget(),
        new JdbcTarget(),
    ];
    $request->createCrawlerRequest->targets->mongoDBTargets = [
        new MongoDBTarget(),
        new MongoDBTarget(),
        new MongoDBTarget(),
    ];
    $request->createCrawlerRequest->targets->s3Targets = [
        new S3Target(),
        new S3Target(),
        new S3Target(),
        new S3Target(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = CreateCrawlerXAmzTargetEnum::AWS_GLUE_CREATE_CRAWLER;

    $response = $sdk->sdk->createCrawler($request);

    if ($response->createCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomEntityType

<p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p> <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomEntityTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomEntityTypeRequest();
    $request->createCustomEntityTypeRequest = new CreateCustomEntityTypeRequest();
    $request->createCustomEntityTypeRequest->contextWords = [
        'dolorem',
    ];
    $request->createCustomEntityTypeRequest->name = 'Norma Erdman';
    $request->createCustomEntityTypeRequest->regexString = 'cum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = CreateCustomEntityTypeXAmzTargetEnum::AWS_GLUE_CREATE_CUSTOM_ENTITY_TYPE;

    $response = $sdk->sdk->createCustomEntityType($request);

    if ($response->createCustomEntityTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDataQualityRuleset

<p>Creates a data quality ruleset with DQDL rules applied to a specified Glue table.</p> <p>You create the ruleset using the Data Quality Definition Language (DQDL). For more information, see the Glue developer guide.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityTargetTable;
use \OpenAPI\OpenAPI\Models\Operations\CreateDataQualityRulesetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDataQualityRulesetRequest();
    $request->createDataQualityRulesetRequest = new CreateDataQualityRulesetRequest();
    $request->createDataQualityRulesetRequest->clientToken = 'ipsa';
    $request->createDataQualityRulesetRequest->description = 'ipsa';
    $request->createDataQualityRulesetRequest->name = 'Viola Hahn';
    $request->createDataQualityRulesetRequest->ruleset = 'voluptatibus';
    $request->createDataQualityRulesetRequest->tags = [
        'natus' => 'eos',
        'atque' => 'sit',
    ];
    $request->createDataQualityRulesetRequest->targetTable = new DataQualityTargetTable();
    $request->createDataQualityRulesetRequest->targetTable->databaseName = 'fugiat';
    $request->createDataQualityRulesetRequest->targetTable->tableName = 'ab';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = CreateDataQualityRulesetXAmzTargetEnum::AWS_GLUE_CREATE_DATA_QUALITY_RULESET;

    $response = $sdk->sdk->createDataQualityRuleset($request);

    if ($response->createDataQualityRulesetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDatabase

Creates a new database in a Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalPermissions;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLakePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\FederatedDatabase;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\CreateDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDatabaseRequest();
    $request->createDatabaseRequest = new CreateDatabaseRequest();
    $request->createDatabaseRequest->catalogId = 'necessitatibus';
    $request->createDatabaseRequest->databaseInput = new DatabaseInput();
    $request->createDatabaseRequest->databaseInput->createTableDefaultPermissions = [
        new PrincipalPermissions(),
        new PrincipalPermissions(),
        new PrincipalPermissions(),
    ];
    $request->createDatabaseRequest->databaseInput->description = 'asperiores';
    $request->createDatabaseRequest->databaseInput->federatedDatabase = new FederatedDatabase();
    $request->createDatabaseRequest->databaseInput->federatedDatabase->connectionName = 'nihil';
    $request->createDatabaseRequest->databaseInput->federatedDatabase->identifier = 'ipsum';
    $request->createDatabaseRequest->databaseInput->locationUri = 'voluptate';
    $request->createDatabaseRequest->databaseInput->name = 'Elbert Gislason I';
    $request->createDatabaseRequest->databaseInput->parameters = [
        'accusamus' => 'ad',
        'saepe' => 'suscipit',
        'deserunt' => 'provident',
        'minima' => 'repellendus',
    ];
    $request->createDatabaseRequest->databaseInput->targetDatabase = new DatabaseIdentifier();
    $request->createDatabaseRequest->databaseInput->targetDatabase->catalogId = 'totam';
    $request->createDatabaseRequest->databaseInput->targetDatabase->databaseName = 'similique';
    $request->createDatabaseRequest->tags = [
        'at' => 'quaerat',
    ];
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = CreateDatabaseXAmzTargetEnum::AWS_GLUE_CREATE_DATABASE;

    $response = $sdk->sdk->createDatabase($request);

    if ($response->createDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDevEndpoint

Creates a new development endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateDevEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDevEndpointRequest();
    $request->createDevEndpointRequest = new CreateDevEndpointRequest();
    $request->createDevEndpointRequest->arguments = [
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->createDevEndpointRequest->endpointName = 'tenetur';
    $request->createDevEndpointRequest->extraJarsS3Path = 'amet';
    $request->createDevEndpointRequest->extraPythonLibsS3Path = 'tempore';
    $request->createDevEndpointRequest->glueVersion = 'accusamus';
    $request->createDevEndpointRequest->numberOfNodes = 253941;
    $request->createDevEndpointRequest->numberOfWorkers = 313692;
    $request->createDevEndpointRequest->publicKey = 'dolorem';
    $request->createDevEndpointRequest->publicKeys = [
        'totam',
        'nihil',
        'sit',
        'expedita',
    ];
    $request->createDevEndpointRequest->roleArn = 'neque';
    $request->createDevEndpointRequest->securityConfiguration = 'sed';
    $request->createDevEndpointRequest->securityGroupIds = [
        'libero',
        'voluptas',
    ];
    $request->createDevEndpointRequest->subnetId = 'deserunt';
    $request->createDevEndpointRequest->tags = [
        'ipsum' => 'incidunt',
        'qui' => 'cupiditate',
    ];
    $request->createDevEndpointRequest->workerType = WorkerTypeEnum::G025_X;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = CreateDevEndpointXAmzTargetEnum::AWS_GLUE_CREATE_DEV_ENDPOINT;

    $response = $sdk->sdk->createDevEndpoint($request);

    if ($response->createDevEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createJob

Creates a new job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenConfigurationNode;
use \OpenAPI\OpenAPI\Models\Shared\Aggregate;
use \OpenAPI\OpenAPI\Models\Shared\AggregateOperation;
use \OpenAPI\OpenAPI\Models\Shared\AggFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyMapping;
use \OpenAPI\OpenAPI\Models\Shared\Mapping;
use \OpenAPI\OpenAPI\Models\Shared\AthenaConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueSchema;
use \OpenAPI\OpenAPI\Models\Shared\GlueStudioSchemaColumn;
use \OpenAPI\OpenAPI\Models\Shared\CatalogDeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\CatalogHudiSource;
use \OpenAPI\OpenAPI\Models\Shared\CatalogKafkaSource;
use \OpenAPI\OpenAPI\Models\Shared\StreamingDataPreviewOptions;
use \OpenAPI\OpenAPI\Models\Shared\KafkaStreamingSourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\CatalogKinesisSource;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamingSourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\StartingPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\BasicCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\CustomCode;
use \OpenAPI\OpenAPI\Models\Shared\DirectJDBCSource;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectKafkaSource;
use \OpenAPI\OpenAPI\Models\Shared\DirectKinesisSource;
use \OpenAPI\OpenAPI\Models\Shared\DropDuplicates;
use \OpenAPI\OpenAPI\Models\Shared\DropFields;
use \OpenAPI\OpenAPI\Models\Shared\DropNullFields;
use \OpenAPI\OpenAPI\Models\Shared\NullCheckBoxList;
use \OpenAPI\OpenAPI\Models\Shared\NullValueField;
use \OpenAPI\OpenAPI\Models\Shared\Datatype;
use \OpenAPI\OpenAPI\Models\Shared\DynamicTransform;
use \OpenAPI\OpenAPI\Models\Shared\TransformConfigParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateDataQuality;
use \OpenAPI\OpenAPI\Models\Shared\DQTransformOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\DQResultsPublishingOptions;
use \OpenAPI\OpenAPI\Models\Shared\DQStopJobOnFailureOptions;
use \OpenAPI\OpenAPI\Models\Shared\DQStopJobOnFailureTimingEnum;
use \OpenAPI\OpenAPI\Models\Shared\FillMissingValues;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterValue;
use \OpenAPI\OpenAPI\Models\Shared\FilterValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterLogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GovernedCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceAdditionalOptions;
use \OpenAPI\OpenAPI\Models\Shared\GovernedCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCatalogBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorOptions;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorTarget;
use \OpenAPI\OpenAPI\Models\Shared\Join;
use \OpenAPI\OpenAPI\Models\Shared\JoinColumn;
use \OpenAPI\OpenAPI\Models\Shared\JoinTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Merge;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\MySQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\MySQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\OracleSQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\OracleSQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\PIIDetection;
use \OpenAPI\OpenAPI\Models\Shared\PiiTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSource;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftTarget;
use \OpenAPI\OpenAPI\Models\Shared\UpsertRedshiftTargetOptions;
use \OpenAPI\OpenAPI\Models\Shared\RelationalCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\RenameField;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogDeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogHudiSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3CsvSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DirectSourceAdditionalOptions;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuoteCharEnum;
use \OpenAPI\OpenAPI\Models\Shared\SeparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaDirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTargetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectSchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3GlueParquetTarget;
use \OpenAPI\OpenAPI\Models\Shared\ParquetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiDirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\HudiTargetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiSource;
use \OpenAPI\OpenAPI\Models\Shared\S3JsonSource;
use \OpenAPI\OpenAPI\Models\Shared\S3ParquetSource;
use \OpenAPI\OpenAPI\Models\Shared\SelectFields;
use \OpenAPI\OpenAPI\Models\Shared\SelectFromCollection;
use \OpenAPI\OpenAPI\Models\Shared\SparkConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\SparkConnectorTarget;
use \OpenAPI\OpenAPI\Models\Shared\SparkSQL;
use \OpenAPI\OpenAPI\Models\Shared\SqlAlias;
use \OpenAPI\OpenAPI\Models\Shared\Spigot;
use \OpenAPI\OpenAPI\Models\Shared\SplitFields;
use \OpenAPI\OpenAPI\Models\Shared\Union;
use \OpenAPI\OpenAPI\Models\Shared\UnionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobCommand;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionsList;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionProperty;
use \OpenAPI\OpenAPI\Models\Shared\NotificationProperty;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlDetails;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlAuthStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateJobRequest();
    $request->createJobRequest = new CreateJobRequest();
    $request->createJobRequest->allocatedCapacity = 174909;
    $request->createJobRequest->codeGenConfigurationNodes = [
        'facilis' => new CodeGenConfigurationNode(),
        'aliquid' => new CodeGenConfigurationNode(),
        'quam' => new CodeGenConfigurationNode(),
    ];
    $request->createJobRequest->command = new JobCommand();
    $request->createJobRequest->command->name = 'Marty Deckow';
    $request->createJobRequest->command->pythonVersion = 'magni';
    $request->createJobRequest->command->scriptLocation = 'odio';
    $request->createJobRequest->connections = new ConnectionsList();
    $request->createJobRequest->connections->connections = [
        'ullam',
    ];
    $request->createJobRequest->defaultArguments = [
        'hic' => 'voluptatem',
        'cumque' => 'soluta',
        'nobis' => 'et',
    ];
    $request->createJobRequest->description = 'saepe';
    $request->createJobRequest->executionClass = ExecutionClassEnum::FLEX;
    $request->createJobRequest->executionProperty = new ExecutionProperty();
    $request->createJobRequest->executionProperty->maxConcurrentRuns = 83422;
    $request->createJobRequest->glueVersion = 'nobis';
    $request->createJobRequest->logUri = 'quos';
    $request->createJobRequest->maxCapacity = 7316.94;
    $request->createJobRequest->maxRetries = 584476;
    $request->createJobRequest->name = 'Dixie Durgan';
    $request->createJobRequest->nonOverridableArguments = [
        'dolorum' => 'architecto',
    ];
    $request->createJobRequest->notificationProperty = new NotificationProperty();
    $request->createJobRequest->notificationProperty->notifyDelayAfter = 63038;
    $request->createJobRequest->numberOfWorkers = 16429;
    $request->createJobRequest->role = 'quas';
    $request->createJobRequest->securityConfiguration = 'itaque';
    $request->createJobRequest->sourceControlDetails = new SourceControlDetails();
    $request->createJobRequest->sourceControlDetails->authStrategy = SourceControlAuthStrategyEnum::PERSONAL_ACCESS_TOKEN;
    $request->createJobRequest->sourceControlDetails->authToken = 'est';
    $request->createJobRequest->sourceControlDetails->branch = 'repellendus';
    $request->createJobRequest->sourceControlDetails->folder = 'porro';
    $request->createJobRequest->sourceControlDetails->lastCommitId = 'doloribus';
    $request->createJobRequest->sourceControlDetails->owner = 'ut';
    $request->createJobRequest->sourceControlDetails->provider = SourceControlProviderEnum::AWS_CODE_COMMIT;
    $request->createJobRequest->sourceControlDetails->repository = 'cupiditate';
    $request->createJobRequest->tags = [
        'quae' => 'laudantium',
    ];
    $request->createJobRequest->timeout = 485628;
    $request->createJobRequest->workerType = WorkerTypeEnum::G2_X;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = CreateJobXAmzTargetEnum::AWS_GLUE_CREATE_JOB;

    $response = $sdk->sdk->createJob($request);

    if ($response->createJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMLTransform

<p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Shared\TransformParameters;
use \OpenAPI\OpenAPI\Models\Shared\FindMatchesParameters;
use \OpenAPI\OpenAPI\Models\Shared\TransformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformEncryption;
use \OpenAPI\OpenAPI\Models\Shared\MLUserDataEncryption;
use \OpenAPI\OpenAPI\Models\Shared\MLUserDataEncryptionModeStringEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateMLTransformXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMLTransformRequest();
    $request->createMLTransformRequest = new CreateMLTransformRequest();
    $request->createMLTransformRequest->description = 'voluptate';
    $request->createMLTransformRequest->glueVersion = 'consectetur';
    $request->createMLTransformRequest->inputRecordTables = [
        new GlueTable(),
        new GlueTable(),
        new GlueTable(),
        new GlueTable(),
    ];
    $request->createMLTransformRequest->maxCapacity = 9493.19;
    $request->createMLTransformRequest->maxRetries = 492268;
    $request->createMLTransformRequest->name = 'Kelvin Schmidt';
    $request->createMLTransformRequest->numberOfWorkers = 708548;
    $request->createMLTransformRequest->parameters = new TransformParameters();
    $request->createMLTransformRequest->parameters->findMatchesParameters = new FindMatchesParameters();
    $request->createMLTransformRequest->parameters->findMatchesParameters->accuracyCostTradeoff = 8742.88;
    $request->createMLTransformRequest->parameters->findMatchesParameters->enforceProvidedLabels = false;
    $request->createMLTransformRequest->parameters->findMatchesParameters->precisionRecallTradeoff = 4981.4;
    $request->createMLTransformRequest->parameters->findMatchesParameters->primaryKeyColumnName = 'dolore';
    $request->createMLTransformRequest->parameters->transformType = TransformTypeEnum::FIND_MATCHES;
    $request->createMLTransformRequest->role = 'quibusdam';
    $request->createMLTransformRequest->tags = [
        'sequi' => 'natus',
        'impedit' => 'aut',
        'voluptatibus' => 'exercitationem',
        'nulla' => 'fugit',
    ];
    $request->createMLTransformRequest->timeout = 780427;
    $request->createMLTransformRequest->transformEncryption = new TransformEncryption();
    $request->createMLTransformRequest->transformEncryption->mlUserDataEncryption = new MLUserDataEncryption();
    $request->createMLTransformRequest->transformEncryption->mlUserDataEncryption->kmsKeyId = 'maiores';
    $request->createMLTransformRequest->transformEncryption->mlUserDataEncryption->mlUserDataEncryptionMode = MLUserDataEncryptionModeStringEnum::SSE_KMS;
    $request->createMLTransformRequest->transformEncryption->taskRunSecurityConfigurationName = 'iusto';
    $request->createMLTransformRequest->workerType = WorkerTypeEnum::G025_X;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = CreateMLTransformXAmzTargetEnum::AWS_GLUE_CREATE_ML_TRANSFORM;

    $response = $sdk->sdk->createMLTransform($request);

    if ($response->createMLTransformResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPartition

Creates a new partition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePartitionRequest();
    $request->createPartitionRequest = new CreatePartitionRequest();
    $request->createPartitionRequest->catalogId = 'vel';
    $request->createPartitionRequest->databaseName = 'possimus';
    $request->createPartitionRequest->partitionInput = new PartitionInput();
    $request->createPartitionRequest->partitionInput->lastAccessTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-23T16:55:55.380Z');
    $request->createPartitionRequest->partitionInput->lastAnalyzedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T08:50:44.084Z');
    $request->createPartitionRequest->partitionInput->parameters = [
        'dolor' => 'maiores',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor = new StorageDescriptor();
    $request->createPartitionRequest->partitionInput->storageDescriptor->additionalLocations = [
        'ex',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->bucketColumns = [
        'excepturi',
        'voluptatibus',
        'nostrum',
        'sapiente',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->columns = [
        new Column(),
        new Column(),
        new Column(),
        new Column(),
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->compressed = false;
    $request->createPartitionRequest->partitionInput->storageDescriptor->inputFormat = 'saepe';
    $request->createPartitionRequest->partitionInput->storageDescriptor->location = 'ea';
    $request->createPartitionRequest->partitionInput->storageDescriptor->numberOfBuckets = 774048;
    $request->createPartitionRequest->partitionInput->storageDescriptor->outputFormat = 'corporis';
    $request->createPartitionRequest->partitionInput->storageDescriptor->parameters = [
        'aliquid' => 'inventore',
        'magnam' => 'ea',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference = new SchemaReference();
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId = new SchemaId();
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->registryName = 'quo';
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->schemaArn = 'consectetur';
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->schemaName = 'recusandae';
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaVersionId = 'aspernatur';
    $request->createPartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaVersionNumber = 325310;
    $request->createPartitionRequest->partitionInput->storageDescriptor->serdeInfo = new SerDeInfo();
    $request->createPartitionRequest->partitionInput->storageDescriptor->serdeInfo->name = 'Mr. Elsa Reinger';
    $request->createPartitionRequest->partitionInput->storageDescriptor->serdeInfo->parameters = [
        'aliquam' => 'fugit',
        'accusamus' => 'inventore',
        'non' => 'et',
        'dolorum' => 'laborum',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->serdeInfo->serializationLibrary = 'placeat';
    $request->createPartitionRequest->partitionInput->storageDescriptor->skewedInfo = new SkewedInfo();
    $request->createPartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnNames = [
        'eum',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnValueLocationMaps = [
        'nobis' => 'quas',
        'assumenda' => 'nulla',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnValues = [
        'libero',
        'quasi',
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->sortColumns = [
        new Order(),
        new Order(),
    ];
    $request->createPartitionRequest->partitionInput->storageDescriptor->storedAsSubDirectories = false;
    $request->createPartitionRequest->partitionInput->values = [
        'explicabo',
        'provident',
    ];
    $request->createPartitionRequest->tableName = 'ipsa';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = CreatePartitionXAmzTargetEnum::AWS_GLUE_CREATE_PARTITION;

    $response = $sdk->sdk->createPartition($request);

    if ($response->createPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPartitionIndex

Creates a specified partition index in an existing table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartitionIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePartitionIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionIndex;
use \OpenAPI\OpenAPI\Models\Operations\CreatePartitionIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePartitionIndexRequest();
    $request->createPartitionIndexRequest = new CreatePartitionIndexRequest();
    $request->createPartitionIndexRequest->catalogId = 'fuga';
    $request->createPartitionIndexRequest->databaseName = 'reprehenderit';
    $request->createPartitionIndexRequest->partitionIndex = new PartitionIndex();
    $request->createPartitionIndexRequest->partitionIndex->indexName = 'quidem';
    $request->createPartitionIndexRequest->partitionIndex->keys = [
        'ut',
        'eum',
        'suscipit',
        'assumenda',
    ];
    $request->createPartitionIndexRequest->tableName = 'eos';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = CreatePartitionIndexXAmzTargetEnum::AWS_GLUE_CREATE_PARTITION_INDEX;

    $response = $sdk->sdk->createPartitionIndex($request);

    if ($response->createPartitionIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRegistry

Creates a new registry which may be used to hold a collection of schemas.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRegistryRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRegistryInput;
use \OpenAPI\OpenAPI\Models\Operations\CreateRegistryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRegistryRequest();
    $request->createRegistryInput = new CreateRegistryInput();
    $request->createRegistryInput->description = 'quo';
    $request->createRegistryInput->registryName = 'illum';
    $request->createRegistryInput->tags = [
        'fuga' => 'eius',
        'eos' => 'voluptas',
        'ab' => 'cupiditate',
        'consequatur' => 'tempora',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = CreateRegistryXAmzTargetEnum::AWS_GLUE_CREATE_REGISTRY;

    $response = $sdk->sdk->createRegistry($request);

    if ($response->createRegistryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSchema

<p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSchemaInput;
use \OpenAPI\OpenAPI\Models\Shared\CompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistryId;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSchemaRequest();
    $request->createSchemaInput = new CreateSchemaInput();
    $request->createSchemaInput->compatibility = CompatibilityEnum::NONE;
    $request->createSchemaInput->dataFormat = DataFormatEnum::PROTOBUF;
    $request->createSchemaInput->description = 'quod';
    $request->createSchemaInput->registryId = new RegistryId();
    $request->createSchemaInput->registryId->registryArn = 'dignissimos';
    $request->createSchemaInput->registryId->registryName = 'inventore';
    $request->createSchemaInput->schemaDefinition = 'nihil';
    $request->createSchemaInput->schemaName = 'totam';
    $request->createSchemaInput->tags = [
        'aliquam' => 'odio',
        'occaecati' => 'commodi',
        'sapiente' => 'dolores',
        'deserunt' => 'molestiae',
    ];
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = CreateSchemaXAmzTargetEnum::AWS_GLUE_CREATE_SCHEMA;

    $response = $sdk->sdk->createSchema($request);

    if ($response->createSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createScript

Transforms a directed acyclic graph (DAG) into code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateScriptRequest;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenEdge;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenNode;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenNodeArg;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateScriptXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateScriptRequest();
    $request->createScriptRequest = new CreateScriptRequest();
    $request->createScriptRequest->dagEdges = [
        new CodeGenEdge(),
    ];
    $request->createScriptRequest->dagNodes = [
        new CodeGenNode(),
        new CodeGenNode(),
        new CodeGenNode(),
    ];
    $request->createScriptRequest->language = LanguageEnum::SCALA;
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = CreateScriptXAmzTargetEnum::AWS_GLUE_CREATE_SCRIPT;

    $response = $sdk->sdk->createScript($request);

    if ($response->createScriptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSecurityConfiguration

Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchEncryption;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobBookmarksEncryption;
use \OpenAPI\OpenAPI\Models\Shared\JobBookmarksEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3Encryption;
use \OpenAPI\OpenAPI\Models\Shared\S3EncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSecurityConfigurationRequest();
    $request->createSecurityConfigurationRequest = new CreateSecurityConfigurationRequest();
    $request->createSecurityConfigurationRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createSecurityConfigurationRequest->encryptionConfiguration->cloudWatchEncryption = new CloudWatchEncryption();
    $request->createSecurityConfigurationRequest->encryptionConfiguration->cloudWatchEncryption->cloudWatchEncryptionMode = CloudWatchEncryptionModeEnum::DISABLED;
    $request->createSecurityConfigurationRequest->encryptionConfiguration->cloudWatchEncryption->kmsKeyArn = 'ratione';
    $request->createSecurityConfigurationRequest->encryptionConfiguration->jobBookmarksEncryption = new JobBookmarksEncryption();
    $request->createSecurityConfigurationRequest->encryptionConfiguration->jobBookmarksEncryption->jobBookmarksEncryptionMode = JobBookmarksEncryptionModeEnum::DISABLED;
    $request->createSecurityConfigurationRequest->encryptionConfiguration->jobBookmarksEncryption->kmsKeyArn = 'saepe';
    $request->createSecurityConfigurationRequest->encryptionConfiguration->s3Encryption = [
        new S3Encryption(),
        new S3Encryption(),
        new S3Encryption(),
    ];
    $request->createSecurityConfigurationRequest->name = 'Carl Koch';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = CreateSecurityConfigurationXAmzTargetEnum::AWS_GLUE_CREATE_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->createSecurityConfiguration($request);

    if ($response->createSecurityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSession

Creates a new session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SessionCommand;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionsList;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSessionRequest();
    $request->createSessionRequest = new CreateSessionRequest();
    $request->createSessionRequest->command = new SessionCommand();
    $request->createSessionRequest->command->name = 'Cecil Pollich';
    $request->createSessionRequest->command->pythonVersion = 'occaecati';
    $request->createSessionRequest->connections = new ConnectionsList();
    $request->createSessionRequest->connections->connections = [
        'distinctio',
        'eligendi',
    ];
    $request->createSessionRequest->defaultArguments = [
        'culpa' => 'tempore',
    ];
    $request->createSessionRequest->description = 'adipisci';
    $request->createSessionRequest->glueVersion = 'cumque';
    $request->createSessionRequest->id = '20c4f378-9fd8-471f-99dd-2efd121aa6f1';
    $request->createSessionRequest->idleTimeout = 936747;
    $request->createSessionRequest->maxCapacity = 4240.32;
    $request->createSessionRequest->numberOfWorkers = 447378;
    $request->createSessionRequest->requestOrigin = 'eius';
    $request->createSessionRequest->role = 'libero';
    $request->createSessionRequest->securityConfiguration = 'illum';
    $request->createSessionRequest->tags = [
        'accusantium' => 'aliquam',
        'sapiente' => 'dicta',
        'ullam' => 'reprehenderit',
    ];
    $request->createSessionRequest->timeout = 356707;
    $request->createSessionRequest->workerType = WorkerTypeEnum::G1_X;
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatum';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = CreateSessionXAmzTargetEnum::AWS_GLUE_CREATE_SESSION;

    $response = $sdk->sdk->createSession($request);

    if ($response->createSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTable

Creates a new table definition in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionIndex;
use \OpenAPI\OpenAPI\Models\Shared\TableInput;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\TableIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\CreateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTableRequest();
    $request->createTableRequest = new CreateTableRequest();
    $request->createTableRequest->catalogId = 'dolorum';
    $request->createTableRequest->databaseName = 'architecto';
    $request->createTableRequest->partitionIndexes = [
        new PartitionIndex(),
        new PartitionIndex(),
        new PartitionIndex(),
    ];
    $request->createTableRequest->tableInput = new TableInput();
    $request->createTableRequest->tableInput->description = 'tenetur';
    $request->createTableRequest->tableInput->lastAccessTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-17T15:16:49.489Z');
    $request->createTableRequest->tableInput->lastAnalyzedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-19T05:32:14.038Z');
    $request->createTableRequest->tableInput->name = 'Joann Bogan';
    $request->createTableRequest->tableInput->owner = 'iste';
    $request->createTableRequest->tableInput->parameters = [
        'accusantium' => 'rem',
        'aut' => 'laudantium',
        'eum' => 'mollitia',
        'ab' => 'corrupti',
    ];
    $request->createTableRequest->tableInput->partitionKeys = [
        new Column(),
        new Column(),
    ];
    $request->createTableRequest->tableInput->retention = 32465;
    $request->createTableRequest->tableInput->storageDescriptor = new StorageDescriptor();
    $request->createTableRequest->tableInput->storageDescriptor->additionalLocations = [
        'occaecati',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->bucketColumns = [
        'impedit',
        'explicabo',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->columns = [
        new Column(),
        new Column(),
    ];
    $request->createTableRequest->tableInput->storageDescriptor->compressed = false;
    $request->createTableRequest->tableInput->storageDescriptor->inputFormat = 'aut';
    $request->createTableRequest->tableInput->storageDescriptor->location = 'dignissimos';
    $request->createTableRequest->tableInput->storageDescriptor->numberOfBuckets = 115484;
    $request->createTableRequest->tableInput->storageDescriptor->outputFormat = 'maiores';
    $request->createTableRequest->tableInput->storageDescriptor->parameters = [
        'velit' => 'voluptatibus',
        'voluptas' => 'asperiores',
        'aperiam' => 'ea',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference = new SchemaReference();
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaId = new SchemaId();
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->registryName = 'quaerat';
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->schemaArn = 'consequuntur';
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->schemaName = 'repellendus';
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaVersionId = 'officia';
    $request->createTableRequest->tableInput->storageDescriptor->schemaReference->schemaVersionNumber = 807023;
    $request->createTableRequest->tableInput->storageDescriptor->serdeInfo = new SerDeInfo();
    $request->createTableRequest->tableInput->storageDescriptor->serdeInfo->name = 'Blanche Yundt II';
    $request->createTableRequest->tableInput->storageDescriptor->serdeInfo->parameters = [
        'quod' => 'labore',
        'ab' => 'adipisci',
        'fuga' => 'id',
        'suscipit' => 'velit',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->serdeInfo->serializationLibrary = 'culpa';
    $request->createTableRequest->tableInput->storageDescriptor->skewedInfo = new SkewedInfo();
    $request->createTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnNames = [
        'recusandae',
        'totam',
        'fugiat',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnValueLocationMaps = [
        'ducimus' => 'quos',
        'vel' => 'labore',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnValues = [
        'facilis',
        'cum',
        'commodi',
        'in',
    ];
    $request->createTableRequest->tableInput->storageDescriptor->sortColumns = [
        new Order(),
        new Order(),
    ];
    $request->createTableRequest->tableInput->storageDescriptor->storedAsSubDirectories = false;
    $request->createTableRequest->tableInput->tableType = 'reiciendis';
    $request->createTableRequest->tableInput->targetTable = new TableIdentifier();
    $request->createTableRequest->tableInput->targetTable->catalogId = 'assumenda';
    $request->createTableRequest->tableInput->targetTable->databaseName = 'nemo';
    $request->createTableRequest->tableInput->targetTable->name = 'Gilbert Bayer';
    $request->createTableRequest->tableInput->viewExpandedText = 'in';
    $request->createTableRequest->tableInput->viewOriginalText = 'exercitationem';
    $request->createTableRequest->transactionId = 'earum';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateTableXAmzTargetEnum::AWS_GLUE_CREATE_TABLE;

    $response = $sdk->sdk->createTable($request);

    if ($response->createTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrigger

Creates a new trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\NotificationProperty;
use \OpenAPI\OpenAPI\Models\Shared\EventBatchingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Predicate;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\CrawlStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogicalEnum;
use \OpenAPI\OpenAPI\Models\Shared\TriggerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTriggerRequest();
    $request->createTriggerRequest = new CreateTriggerRequest();
    $request->createTriggerRequest->actions = [
        new Action(),
        new Action(),
        new Action(),
        new Action(),
    ];
    $request->createTriggerRequest->description = 'dolore';
    $request->createTriggerRequest->eventBatchingCondition = new EventBatchingCondition();
    $request->createTriggerRequest->eventBatchingCondition->batchSize = 121059;
    $request->createTriggerRequest->eventBatchingCondition->batchWindow = 992012;
    $request->createTriggerRequest->name = 'Ms. Ethel Farrell';
    $request->createTriggerRequest->predicate = new Predicate();
    $request->createTriggerRequest->predicate->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->createTriggerRequest->predicate->logical = LogicalEnum::AND;
    $request->createTriggerRequest->schedule = 'corporis';
    $request->createTriggerRequest->startOnCreation = false;
    $request->createTriggerRequest->tags = [
        'laboriosam' => 'ipsa',
        'voluptates' => 'libero',
        'vitae' => 'accusamus',
    ];
    $request->createTriggerRequest->type = TriggerTypeEnum::ON_DEMAND;
    $request->createTriggerRequest->workflowName = 'tempora';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateTriggerXAmzTargetEnum::AWS_GLUE_CREATE_TRIGGER;

    $response = $sdk->sdk->createTrigger($request);

    if ($response->createTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserDefinedFunction

Creates a new function definition in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedFunctionInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUri;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserDefinedFunctionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserDefinedFunctionRequest();
    $request->createUserDefinedFunctionRequest = new CreateUserDefinedFunctionRequest();
    $request->createUserDefinedFunctionRequest->catalogId = 'adipisci';
    $request->createUserDefinedFunctionRequest->databaseName = 'minus';
    $request->createUserDefinedFunctionRequest->functionInput = new UserDefinedFunctionInput();
    $request->createUserDefinedFunctionRequest->functionInput->className = 'dolores';
    $request->createUserDefinedFunctionRequest->functionInput->functionName = 'blanditiis';
    $request->createUserDefinedFunctionRequest->functionInput->ownerName = 'in';
    $request->createUserDefinedFunctionRequest->functionInput->ownerType = PrincipalTypeEnum::USER;
    $request->createUserDefinedFunctionRequest->functionInput->resourceUris = [
        new ResourceUri(),
        new ResourceUri(),
    ];
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = CreateUserDefinedFunctionXAmzTargetEnum::AWS_GLUE_CREATE_USER_DEFINED_FUNCTION;

    $response = $sdk->sdk->createUserDefinedFunction($request);

    if ($response->createUserDefinedFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflow

Creates a new workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->createWorkflowRequest = new CreateWorkflowRequest();
    $request->createWorkflowRequest->defaultRunProperties = [
        'nesciunt' => 'culpa',
        'corrupti' => 'pariatur',
        'totam' => 'hic',
        'exercitationem' => 'nobis',
    ];
    $request->createWorkflowRequest->description = 'sit';
    $request->createWorkflowRequest->maxConcurrentRuns = 699575;
    $request->createWorkflowRequest->name = 'Faith Cole';
    $request->createWorkflowRequest->tags = [
        'expedita' => 'ab',
        'iste' => 'dolore',
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = CreateWorkflowXAmzTargetEnum::AWS_GLUE_CREATE_WORKFLOW;

    $response = $sdk->sdk->createWorkflow($request);

    if ($response->createWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBlueprint

Deletes an existing blueprint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBlueprintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBlueprintRequest();
    $request->deleteBlueprintRequest = new DeleteBlueprintRequest();
    $request->deleteBlueprintRequest->name = 'Joe Hoppe';
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = DeleteBlueprintXAmzTargetEnum::AWS_GLUE_DELETE_BLUEPRINT;

    $response = $sdk->sdk->deleteBlueprint($request);

    if ($response->deleteBlueprintResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteClassifier

Removes a classifier from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteClassifierRequest();
    $request->deleteClassifierRequest = new DeleteClassifierRequest();
    $request->deleteClassifierRequest->name = 'Herbert Treutel';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = DeleteClassifierXAmzTargetEnum::AWS_GLUE_DELETE_CLASSIFIER;

    $response = $sdk->sdk->deleteClassifier($request);

    if ($response->deleteClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteColumnStatisticsForPartition

<p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteColumnStatisticsForPartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteColumnStatisticsForPartitionRequest();
    $request->deleteColumnStatisticsForPartitionRequest = new DeleteColumnStatisticsForPartitionRequest();
    $request->deleteColumnStatisticsForPartitionRequest->catalogId = 'ex';
    $request->deleteColumnStatisticsForPartitionRequest->columnName = 'sit';
    $request->deleteColumnStatisticsForPartitionRequest->databaseName = 'non';
    $request->deleteColumnStatisticsForPartitionRequest->partitionValues = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->deleteColumnStatisticsForPartitionRequest->tableName = 'ipsam';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = DeleteColumnStatisticsForPartitionXAmzTargetEnum::AWS_GLUE_DELETE_COLUMN_STATISTICS_FOR_PARTITION;

    $response = $sdk->sdk->deleteColumnStatisticsForPartition($request);

    if ($response->deleteColumnStatisticsForPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteColumnStatisticsForTable

<p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteColumnStatisticsForTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteColumnStatisticsForTableRequest();
    $request->deleteColumnStatisticsForTableRequest = new DeleteColumnStatisticsForTableRequest();
    $request->deleteColumnStatisticsForTableRequest->catalogId = 'recusandae';
    $request->deleteColumnStatisticsForTableRequest->columnName = 'reiciendis';
    $request->deleteColumnStatisticsForTableRequest->databaseName = 'nulla';
    $request->deleteColumnStatisticsForTableRequest->tableName = 'magni';
    $request->xAmzAlgorithm = 'aperiam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'beatae';
    $request->xAmzTarget = DeleteColumnStatisticsForTableXAmzTargetEnum::AWS_GLUE_DELETE_COLUMN_STATISTICS_FOR_TABLE;

    $response = $sdk->sdk->deleteColumnStatisticsForTable($request);

    if ($response->deleteColumnStatisticsForTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

Deletes a connection from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionRequest = new DeleteConnectionRequest();
    $request->deleteConnectionRequest->catalogId = 'laudantium';
    $request->deleteConnectionRequest->connectionName = 'exercitationem';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::AWS_GLUE_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->deleteConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCrawler

Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCrawlerRequest();
    $request->deleteCrawlerRequest = new DeleteCrawlerRequest();
    $request->deleteCrawlerRequest->name = 'Darrel Doyle';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = DeleteCrawlerXAmzTargetEnum::AWS_GLUE_DELETE_CRAWLER;

    $response = $sdk->sdk->deleteCrawler($request);

    if ($response->deleteCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomEntityType

Deletes a custom pattern by specifying its name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomEntityTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomEntityTypeRequest();
    $request->deleteCustomEntityTypeRequest = new DeleteCustomEntityTypeRequest();
    $request->deleteCustomEntityTypeRequest->name = 'Janis Bartell';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = DeleteCustomEntityTypeXAmzTargetEnum::AWS_GLUE_DELETE_CUSTOM_ENTITY_TYPE;

    $response = $sdk->sdk->deleteCustomEntityType($request);

    if ($response->deleteCustomEntityTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataQualityRuleset

Deletes a data quality ruleset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDataQualityRulesetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDataQualityRulesetRequest();
    $request->deleteDataQualityRulesetRequest = new DeleteDataQualityRulesetRequest();
    $request->deleteDataQualityRulesetRequest->name = 'Zachary Borer';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = DeleteDataQualityRulesetXAmzTargetEnum::AWS_GLUE_DELETE_DATA_QUALITY_RULESET;

    $response = $sdk->sdk->deleteDataQualityRuleset($request);

    if ($response->deleteDataQualityRulesetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDatabase

<p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatabaseRequest();
    $request->deleteDatabaseRequest = new DeleteDatabaseRequest();
    $request->deleteDatabaseRequest->catalogId = 'incidunt';
    $request->deleteDatabaseRequest->name = 'Mr. Mike Pollich';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = DeleteDatabaseXAmzTargetEnum::AWS_GLUE_DELETE_DATABASE;

    $response = $sdk->sdk->deleteDatabase($request);

    if ($response->deleteDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDevEndpoint

Deletes a specified development endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDevEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDevEndpointRequest();
    $request->deleteDevEndpointRequest = new DeleteDevEndpointRequest();
    $request->deleteDevEndpointRequest->endpointName = 'alias';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = DeleteDevEndpointXAmzTargetEnum::AWS_GLUE_DELETE_DEV_ENDPOINT;

    $response = $sdk->sdk->deleteDevEndpoint($request);

    if ($response->deleteDevEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJob

Deletes a specified job definition. If the job definition is not found, no exception is thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobRequest();
    $request->deleteJobRequest = new DeleteJobRequest();
    $request->deleteJobRequest->jobName = 'delectus';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = DeleteJobXAmzTargetEnum::AWS_GLUE_DELETE_JOB;

    $response = $sdk->sdk->deleteJob($request);

    if ($response->deleteJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMLTransform

Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMLTransformXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMLTransformRequest();
    $request->deleteMLTransformRequest = new DeleteMLTransformRequest();
    $request->deleteMLTransformRequest->transformId = 'praesentium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DeleteMLTransformXAmzTargetEnum::AWS_GLUE_DELETE_ML_TRANSFORM;

    $response = $sdk->sdk->deleteMLTransform($request);

    if ($response->deleteMLTransformResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePartition

Deletes a specified partition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePartitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePartitionRequest();
    $request->deletePartitionRequest = new DeletePartitionRequest();
    $request->deletePartitionRequest->catalogId = 'reprehenderit';
    $request->deletePartitionRequest->databaseName = 'asperiores';
    $request->deletePartitionRequest->partitionValues = [
        'suscipit',
        'quidem',
        'maxime',
    ];
    $request->deletePartitionRequest->tableName = 'et';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DeletePartitionXAmzTargetEnum::AWS_GLUE_DELETE_PARTITION;

    $response = $sdk->sdk->deletePartition($request);

    if ($response->deletePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePartitionIndex

Deletes a specified partition index from an existing table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartitionIndexRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeletePartitionIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeletePartitionIndexXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePartitionIndexRequest();
    $request->deletePartitionIndexRequest = new DeletePartitionIndexRequest();
    $request->deletePartitionIndexRequest->catalogId = 'officiis';
    $request->deletePartitionIndexRequest->databaseName = 'accusamus';
    $request->deletePartitionIndexRequest->indexName = 'natus';
    $request->deletePartitionIndexRequest->tableName = 'minima';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'corrupti';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = DeletePartitionIndexXAmzTargetEnum::AWS_GLUE_DELETE_PARTITION_INDEX;

    $response = $sdk->sdk->deletePartitionIndex($request);

    if ($response->deletePartitionIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRegistry

Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRegistryRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRegistryInput;
use \OpenAPI\OpenAPI\Models\Shared\RegistryId;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRegistryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRegistryRequest();
    $request->deleteRegistryInput = new DeleteRegistryInput();
    $request->deleteRegistryInput->registryId = new RegistryId();
    $request->deleteRegistryInput->registryId->registryArn = 'suscipit';
    $request->deleteRegistryInput->registryId->registryName = 'repudiandae';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'atque';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DeleteRegistryXAmzTargetEnum::AWS_GLUE_DELETE_REGISTRY;

    $response = $sdk->sdk->deleteRegistry($request);

    if ($response->deleteRegistryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a specified policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->policyHashCondition = 'reiciendis';
    $request->deleteResourcePolicyRequest->resourceArn = 'doloremque';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::AWS_GLUE_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchema

Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSchemaInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSchemaRequest();
    $request->deleteSchemaInput = new DeleteSchemaInput();
    $request->deleteSchemaInput->schemaId = new SchemaId();
    $request->deleteSchemaInput->schemaId->registryName = 'velit';
    $request->deleteSchemaInput->schemaId->schemaArn = 'a';
    $request->deleteSchemaInput->schemaId->schemaName = 'molestias';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteSchemaXAmzTargetEnum::AWS_GLUE_DELETE_SCHEMA;

    $response = $sdk->sdk->deleteSchema($request);

    if ($response->deleteSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchemaVersions

<p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSchemaVersionsInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSchemaVersionsRequest();
    $request->deleteSchemaVersionsInput = new DeleteSchemaVersionsInput();
    $request->deleteSchemaVersionsInput->schemaId = new SchemaId();
    $request->deleteSchemaVersionsInput->schemaId->registryName = 'adipisci';
    $request->deleteSchemaVersionsInput->schemaId->schemaArn = 'eveniet';
    $request->deleteSchemaVersionsInput->schemaId->schemaName = 'occaecati';
    $request->deleteSchemaVersionsInput->versions = 'consequuntur';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteSchemaVersionsXAmzTargetEnum::AWS_GLUE_DELETE_SCHEMA_VERSIONS;

    $response = $sdk->sdk->deleteSchemaVersions($request);

    if ($response->deleteSchemaVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSecurityConfiguration

Deletes a specified security configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSecurityConfigurationRequest();
    $request->deleteSecurityConfigurationRequest = new DeleteSecurityConfigurationRequest();
    $request->deleteSecurityConfigurationRequest->name = 'Conrad Franey III';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'eveniet';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cum';
    $request->xAmzTarget = DeleteSecurityConfigurationXAmzTargetEnum::AWS_GLUE_DELETE_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->deleteSecurityConfiguration($request);

    if ($response->deleteSecurityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSession

Deletes the session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSessionRequest();
    $request->deleteSessionRequest = new DeleteSessionRequest();
    $request->deleteSessionRequest->id = '6e3ab884-5f05-497a-a0ff-2a54a31e9476';
    $request->deleteSessionRequest->requestOrigin = 'ut';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = DeleteSessionXAmzTargetEnum::AWS_GLUE_DELETE_SESSION;

    $response = $sdk->sdk->deleteSession($request);

    if ($response->deleteSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTable

<p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTableRequest();
    $request->deleteTableRequest = new DeleteTableRequest();
    $request->deleteTableRequest->catalogId = 'esse';
    $request->deleteTableRequest->databaseName = 'provident';
    $request->deleteTableRequest->name = 'Natalie Witting';
    $request->deleteTableRequest->transactionId = 'ullam';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = DeleteTableXAmzTargetEnum::AWS_GLUE_DELETE_TABLE;

    $response = $sdk->sdk->deleteTable($request);

    if ($response->deleteTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTableVersion

Deletes a specified version of a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTableVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTableVersionRequest();
    $request->deleteTableVersionRequest = new DeleteTableVersionRequest();
    $request->deleteTableVersionRequest->catalogId = 'ex';
    $request->deleteTableVersionRequest->databaseName = 'aliquid';
    $request->deleteTableVersionRequest->tableName = 'accusantium';
    $request->deleteTableVersionRequest->versionId = 'repellat';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'earum';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = DeleteTableVersionXAmzTargetEnum::AWS_GLUE_DELETE_TABLE_VERSION;

    $response = $sdk->sdk->deleteTableVersion($request);

    if ($response->deleteTableVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrigger

Deletes a specified trigger. If the trigger is not found, no exception is thrown.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTriggerRequest();
    $request->deleteTriggerRequest = new DeleteTriggerRequest();
    $request->deleteTriggerRequest->name = 'Edwin Wolf';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'inventore';
    $request->xAmzTarget = DeleteTriggerXAmzTargetEnum::AWS_GLUE_DELETE_TRIGGER;

    $response = $sdk->sdk->deleteTrigger($request);

    if ($response->deleteTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserDefinedFunction

Deletes an existing function definition from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserDefinedFunctionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserDefinedFunctionRequest();
    $request->deleteUserDefinedFunctionRequest = new DeleteUserDefinedFunctionRequest();
    $request->deleteUserDefinedFunctionRequest->catalogId = 'fugit';
    $request->deleteUserDefinedFunctionRequest->databaseName = 'cumque';
    $request->deleteUserDefinedFunctionRequest->functionName = 'quae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'at';
    $request->xAmzTarget = DeleteUserDefinedFunctionXAmzTargetEnum::AWS_GLUE_DELETE_USER_DEFINED_FUNCTION;

    $response = $sdk->sdk->deleteUserDefinedFunction($request);

    if ($response->deleteUserDefinedFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

Deletes a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->deleteWorkflowRequest = new DeleteWorkflowRequest();
    $request->deleteWorkflowRequest->name = 'Craig Williamson II';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = DeleteWorkflowXAmzTargetEnum::AWS_GLUE_DELETE_WORKFLOW;

    $response = $sdk->sdk->deleteWorkflow($request);

    if ($response->deleteWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlueprint

Retrieves the details of a blueprint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlueprintRequest();
    $request->getBlueprintRequest = new GetBlueprintRequest();
    $request->getBlueprintRequest->includeBlueprint = false;
    $request->getBlueprintRequest->includeParameterSpec = false;
    $request->getBlueprintRequest->name = 'Sonja Metz';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = GetBlueprintXAmzTargetEnum::AWS_GLUE_GET_BLUEPRINT;

    $response = $sdk->sdk->getBlueprint($request);

    if ($response->getBlueprintResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlueprintRun

Retrieves the details of a blueprint run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlueprintRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlueprintRunRequest();
    $request->getBlueprintRunRequest = new GetBlueprintRunRequest();
    $request->getBlueprintRunRequest->blueprintName = 'ratione';
    $request->getBlueprintRunRequest->runId = 'animi';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = GetBlueprintRunXAmzTargetEnum::AWS_GLUE_GET_BLUEPRINT_RUN;

    $response = $sdk->sdk->getBlueprintRun($request);

    if ($response->getBlueprintRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlueprintRuns

Retrieves the details of blueprint runs for a specified blueprint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetBlueprintRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlueprintRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlueprintRunsRequest();
    $request->getBlueprintRunsRequest = new GetBlueprintRunsRequest();
    $request->getBlueprintRunsRequest->blueprintName = 'occaecati';
    $request->getBlueprintRunsRequest->maxResults = 382440;
    $request->getBlueprintRunsRequest->nextToken = 'adipisci';
    $request->maxResults = 'quasi';
    $request->nextToken = 'magni';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = GetBlueprintRunsXAmzTargetEnum::AWS_GLUE_GET_BLUEPRINT_RUNS;

    $response = $sdk->sdk->getBlueprintRuns($request);

    if ($response->getBlueprintRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCatalogImportStatus

Retrieves the status of a migration operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogImportStatusRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCatalogImportStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogImportStatusXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCatalogImportStatusRequest();
    $request->getCatalogImportStatusRequest = new GetCatalogImportStatusRequest();
    $request->getCatalogImportStatusRequest->catalogId = 'dicta';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = GetCatalogImportStatusXAmzTargetEnum::AWS_GLUE_GET_CATALOG_IMPORT_STATUS;

    $response = $sdk->sdk->getCatalogImportStatus($request);

    if ($response->getCatalogImportStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClassifier

Retrieve a classifier by name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassifierRequest();
    $request->getClassifierRequest = new GetClassifierRequest();
    $request->getClassifierRequest->name = 'Brian Carroll';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ex';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = GetClassifierXAmzTargetEnum::AWS_GLUE_GET_CLASSIFIER;

    $response = $sdk->sdk->getClassifier($request);

    if ($response->getClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getClassifiers

Lists all classifier objects in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetClassifiersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetClassifiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetClassifiersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetClassifiersRequest();
    $request->getClassifiersRequest = new GetClassifiersRequest();
    $request->getClassifiersRequest->maxResults = 344718;
    $request->getClassifiersRequest->nextToken = 'fugiat';
    $request->maxResults = 'expedita';
    $request->nextToken = 'aliquid';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = GetClassifiersXAmzTargetEnum::AWS_GLUE_GET_CLASSIFIERS;

    $response = $sdk->sdk->getClassifiers($request);

    if ($response->getClassifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getColumnStatisticsForPartition

<p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnStatisticsForPartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetColumnStatisticsForPartitionRequest();
    $request->getColumnStatisticsForPartitionRequest = new GetColumnStatisticsForPartitionRequest();
    $request->getColumnStatisticsForPartitionRequest->catalogId = 'id';
    $request->getColumnStatisticsForPartitionRequest->columnNames = [
        'error',
    ];
    $request->getColumnStatisticsForPartitionRequest->databaseName = 'possimus';
    $request->getColumnStatisticsForPartitionRequest->partitionValues = [
        'mollitia',
        'laborum',
        'libero',
        'ad',
    ];
    $request->getColumnStatisticsForPartitionRequest->tableName = 'deleniti';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'vitae';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = GetColumnStatisticsForPartitionXAmzTargetEnum::AWS_GLUE_GET_COLUMN_STATISTICS_FOR_PARTITION;

    $response = $sdk->sdk->getColumnStatisticsForPartition($request);

    if ($response->getColumnStatisticsForPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getColumnStatisticsForTable

<p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetColumnStatisticsForTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetColumnStatisticsForTableRequest();
    $request->getColumnStatisticsForTableRequest = new GetColumnStatisticsForTableRequest();
    $request->getColumnStatisticsForTableRequest->catalogId = 'ad';
    $request->getColumnStatisticsForTableRequest->columnNames = [
        'voluptatem',
        'molestias',
        'cum',
    ];
    $request->getColumnStatisticsForTableRequest->databaseName = 'aliquid';
    $request->getColumnStatisticsForTableRequest->tableName = 'beatae';
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = GetColumnStatisticsForTableXAmzTargetEnum::AWS_GLUE_GET_COLUMN_STATISTICS_FOR_TABLE;

    $response = $sdk->sdk->getColumnStatisticsForTable($request);

    if ($response->getColumnStatisticsForTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnection

Retrieves a connection definition from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionRequest();
    $request->getConnectionRequest = new GetConnectionRequest();
    $request->getConnectionRequest->catalogId = 'sapiente';
    $request->getConnectionRequest->hidePassword = false;
    $request->getConnectionRequest->name = 'Juan Parker';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = GetConnectionXAmzTargetEnum::AWS_GLUE_GET_CONNECTION;

    $response = $sdk->sdk->getConnection($request);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnections

Retrieves a list of connection definitions from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetConnectionsFilter;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionsRequest();
    $request->getConnectionsRequest = new GetConnectionsRequest();
    $request->getConnectionsRequest->catalogId = 'minus';
    $request->getConnectionsRequest->filter = new GetConnectionsFilter();
    $request->getConnectionsRequest->filter->connectionType = ConnectionTypeEnum::MONGODB;
    $request->getConnectionsRequest->filter->matchCriteria = [
        'ratione',
        'ullam',
        'perferendis',
        'illum',
    ];
    $request->getConnectionsRequest->hidePassword = false;
    $request->getConnectionsRequest->maxResults = 518150;
    $request->getConnectionsRequest->nextToken = 'impedit';
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'nam';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'aliquam';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = GetConnectionsXAmzTargetEnum::AWS_GLUE_GET_CONNECTIONS;

    $response = $sdk->sdk->getConnections($request);

    if ($response->getConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawler

Retrieves metadata for a specified crawler.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlerRequest();
    $request->getCrawlerRequest = new GetCrawlerRequest();
    $request->getCrawlerRequest->name = 'Mr. Carmen Altenwerth';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetCrawlerXAmzTargetEnum::AWS_GLUE_GET_CRAWLER;

    $response = $sdk->sdk->getCrawler($request);

    if ($response->getCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawlerMetrics

Retrieves metrics about specified crawlers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlerMetricsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCrawlerMetricsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlerMetricsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlerMetricsRequest();
    $request->getCrawlerMetricsRequest = new GetCrawlerMetricsRequest();
    $request->getCrawlerMetricsRequest->crawlerNameList = [
        'ipsa',
    ];
    $request->getCrawlerMetricsRequest->maxResults = 559682;
    $request->getCrawlerMetricsRequest->nextToken = 'eveniet';
    $request->maxResults = 'impedit';
    $request->nextToken = 'officiis';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetCrawlerMetricsXAmzTargetEnum::AWS_GLUE_GET_CRAWLER_METRICS;

    $response = $sdk->sdk->getCrawlerMetrics($request);

    if ($response->getCrawlerMetricsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrawlers

Retrieves metadata for all crawlers defined in the customer account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCrawlersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrawlersRequest();
    $request->getCrawlersRequest = new GetCrawlersRequest();
    $request->getCrawlersRequest->maxResults = 426943;
    $request->getCrawlersRequest->nextToken = 'voluptatum';
    $request->maxResults = 'magnam';
    $request->nextToken = 'exercitationem';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'recusandae';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = GetCrawlersXAmzTargetEnum::AWS_GLUE_GET_CRAWLERS;

    $response = $sdk->sdk->getCrawlers($request);

    if ($response->getCrawlersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCustomEntityType

Retrieves the details of a custom pattern by specifying its name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCustomEntityTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCustomEntityTypeXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCustomEntityTypeRequest();
    $request->getCustomEntityTypeRequest = new GetCustomEntityTypeRequest();
    $request->getCustomEntityTypeRequest->name = 'Mrs. June Tremblay';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'harum';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = GetCustomEntityTypeXAmzTargetEnum::AWS_GLUE_GET_CUSTOM_ENTITY_TYPE;

    $response = $sdk->sdk->getCustomEntityType($request);

    if ($response->getCustomEntityTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataCatalogEncryptionSettings

Retrieves the security configuration for a specified catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCatalogEncryptionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataCatalogEncryptionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataCatalogEncryptionSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataCatalogEncryptionSettingsRequest();
    $request->getDataCatalogEncryptionSettingsRequest = new GetDataCatalogEncryptionSettingsRequest();
    $request->getDataCatalogEncryptionSettingsRequest->catalogId = 'occaecati';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = GetDataCatalogEncryptionSettingsXAmzTargetEnum::AWS_GLUE_GET_DATA_CATALOG_ENCRYPTION_SETTINGS;

    $response = $sdk->sdk->getDataCatalogEncryptionSettings($request);

    if ($response->getDataCatalogEncryptionSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataQualityResult

Retrieves the result of a data quality rule evaluation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityResultRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataQualityResultRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityResultXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataQualityResultRequest();
    $request->getDataQualityResultRequest = new GetDataQualityResultRequest();
    $request->getDataQualityResultRequest->resultId = 'quos';
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'ducimus';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = GetDataQualityResultXAmzTargetEnum::AWS_GLUE_GET_DATA_QUALITY_RESULT;

    $response = $sdk->sdk->getDataQualityResult($request);

    if ($response->getDataQualityResultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataQualityRuleRecommendationRun

Gets the specified recommendation run that was used to generate rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRuleRecommendationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataQualityRuleRecommendationRunRequest();
    $request->getDataQualityRuleRecommendationRunRequest = new GetDataQualityRuleRecommendationRunRequest();
    $request->getDataQualityRuleRecommendationRunRequest->runId = 'quasi';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'consectetur';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->xAmzTarget = GetDataQualityRuleRecommendationRunXAmzTargetEnum::AWS_GLUE_GET_DATA_QUALITY_RULE_RECOMMENDATION_RUN;

    $response = $sdk->sdk->getDataQualityRuleRecommendationRun($request);

    if ($response->getDataQualityRuleRecommendationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataQualityRuleset

Returns an existing ruleset by identifier or name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRulesetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataQualityRulesetRequest();
    $request->getDataQualityRulesetRequest = new GetDataQualityRulesetRequest();
    $request->getDataQualityRulesetRequest->name = 'Miss Dominick Rogahn';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'fuga';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = GetDataQualityRulesetXAmzTargetEnum::AWS_GLUE_GET_DATA_QUALITY_RULESET;

    $response = $sdk->sdk->getDataQualityRuleset($request);

    if ($response->getDataQualityRulesetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataQualityRulesetEvaluationRun

Retrieves a specific run where a ruleset is evaluated against a data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataQualityRulesetEvaluationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataQualityRulesetEvaluationRunRequest();
    $request->getDataQualityRulesetEvaluationRunRequest = new GetDataQualityRulesetEvaluationRunRequest();
    $request->getDataQualityRulesetEvaluationRunRequest->runId = 'distinctio';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = GetDataQualityRulesetEvaluationRunXAmzTargetEnum::AWS_GLUE_GET_DATA_QUALITY_RULESET_EVALUATION_RUN;

    $response = $sdk->sdk->getDataQualityRulesetEvaluationRun($request);

    if ($response->getDataQualityRulesetEvaluationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatabase

Retrieves the definition of a specified database.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatabaseRequest();
    $request->getDatabaseRequest = new GetDatabaseRequest();
    $request->getDatabaseRequest->catalogId = 'quos';
    $request->getDatabaseRequest->name = 'Lorena Johns';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = GetDatabaseXAmzTargetEnum::AWS_GLUE_GET_DATABASE;

    $response = $sdk->sdk->getDatabase($request);

    if ($response->getDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDatabases

Retrieves all databases defined in a given Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDatabasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDatabasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDatabasesRequest();
    $request->getDatabasesRequest = new GetDatabasesRequest();
    $request->getDatabasesRequest->catalogId = 'quasi';
    $request->getDatabasesRequest->maxResults = 247685;
    $request->getDatabasesRequest->nextToken = 'maiores';
    $request->getDatabasesRequest->resourceShareType = ResourceShareTypeEnum::FOREIGN;
    $request->maxResults = 'sint';
    $request->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = GetDatabasesXAmzTargetEnum::AWS_GLUE_GET_DATABASES;

    $response = $sdk->sdk->getDatabases($request);

    if ($response->getDatabasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDataflowGraph

Transforms a Python script into a directed acyclic graph (DAG). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDataflowGraphRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDataflowGraphRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDataflowGraphXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDataflowGraphRequest();
    $request->getDataflowGraphRequest = new GetDataflowGraphRequest();
    $request->getDataflowGraphRequest->pythonScript = 'accusamus';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = GetDataflowGraphXAmzTargetEnum::AWS_GLUE_GET_DATAFLOW_GRAPH;

    $response = $sdk->sdk->getDataflowGraph($request);

    if ($response->getDataflowGraphResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevEndpoint

<p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDevEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevEndpointRequest();
    $request->getDevEndpointRequest = new GetDevEndpointRequest();
    $request->getDevEndpointRequest->endpointName = 'delectus';
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = GetDevEndpointXAmzTargetEnum::AWS_GLUE_GET_DEV_ENDPOINT;

    $response = $sdk->sdk->getDevEndpoint($request);

    if ($response->getDevEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDevEndpoints

<p>Retrieves all the development endpoints in this Amazon Web Services account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDevEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDevEndpointsRequest();
    $request->getDevEndpointsRequest = new GetDevEndpointsRequest();
    $request->getDevEndpointsRequest->maxResults = 216457;
    $request->getDevEndpointsRequest->nextToken = 'impedit';
    $request->maxResults = 'magni';
    $request->nextToken = 'soluta';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = GetDevEndpointsXAmzTargetEnum::AWS_GLUE_GET_DEV_ENDPOINTS;

    $response = $sdk->sdk->getDevEndpoints($request);

    if ($response->getDevEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJob

Retrieves an existing job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRequest();
    $request->getJobRequest = new GetJobRequest();
    $request->getJobRequest->jobName = 'neque';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = GetJobXAmzTargetEnum::AWS_GLUE_GET_JOB;

    $response = $sdk->sdk->getJob($request);

    if ($response->getJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobBookmark

<p>Returns information on a job bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobBookmarkXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobBookmarkRequest();
    $request->getJobBookmarkRequest = new GetJobBookmarkRequest();
    $request->getJobBookmarkRequest->jobName = 'magnam';
    $request->getJobBookmarkRequest->runId = 'quibusdam';
    $request->xAmzAlgorithm = 'inventore';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = GetJobBookmarkXAmzTargetEnum::AWS_GLUE_GET_JOB_BOOKMARK;

    $response = $sdk->sdk->getJobBookmark($request);

    if ($response->getJobBookmarkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobRun

Retrieves the metadata for a given job run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRunRequest();
    $request->getJobRunRequest = new GetJobRunRequest();
    $request->getJobRunRequest->jobName = 'aliquam';
    $request->getJobRunRequest->predecessorsIncluded = false;
    $request->getJobRunRequest->runId = 'velit';
    $request->xAmzAlgorithm = 'illo';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetJobRunXAmzTargetEnum::AWS_GLUE_GET_JOB_RUN;

    $response = $sdk->sdk->getJobRun($request);

    if ($response->getJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobRuns

Retrieves metadata for all runs of a given job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRunsRequest();
    $request->getJobRunsRequest = new GetJobRunsRequest();
    $request->getJobRunsRequest->jobName = 'eum';
    $request->getJobRunsRequest->maxResults = 246557;
    $request->getJobRunsRequest->nextToken = 'ut';
    $request->maxResults = 'perspiciatis';
    $request->nextToken = 'earum';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = GetJobRunsXAmzTargetEnum::AWS_GLUE_GET_JOB_RUNS;

    $response = $sdk->sdk->getJobRuns($request);

    if ($response->getJobRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobs

Retrieves all current job definitions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobsRequest();
    $request->getJobsRequest = new GetJobsRequest();
    $request->getJobsRequest->maxResults = 931505;
    $request->getJobsRequest->nextToken = 'velit';
    $request->maxResults = 'laborum';
    $request->nextToken = 'non';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'sit';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = GetJobsXAmzTargetEnum::AWS_GLUE_GET_JOBS;

    $response = $sdk->sdk->getJobs($request);

    if ($response->getJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMLTaskRun

Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMLTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMLTaskRunRequest();
    $request->getMLTaskRunRequest = new GetMLTaskRunRequest();
    $request->getMLTaskRunRequest->taskRunId = 'ea';
    $request->getMLTaskRunRequest->transformId = 'quidem';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'a';
    $request->xAmzTarget = GetMLTaskRunXAmzTargetEnum::AWS_GLUE_GET_ML_TASK_RUN;

    $response = $sdk->sdk->getMLTaskRun($request);

    if ($response->getMLTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMLTaskRuns

<p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTaskRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMLTaskRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TaskStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunSortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TaskRunSortColumnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTaskRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMLTaskRunsRequest();
    $request->getMLTaskRunsRequest = new GetMLTaskRunsRequest();
    $request->getMLTaskRunsRequest->filter = new TaskRunFilterCriteria();
    $request->getMLTaskRunsRequest->filter->startedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-25T13:02:18.147Z');
    $request->getMLTaskRunsRequest->filter->startedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-16T19:03:02.908Z');
    $request->getMLTaskRunsRequest->filter->status = TaskStatusTypeEnum::SUCCEEDED;
    $request->getMLTaskRunsRequest->filter->taskRunType = TaskTypeEnum::EXPORT_LABELS;
    $request->getMLTaskRunsRequest->maxResults = 373040;
    $request->getMLTaskRunsRequest->nextToken = 'corporis';
    $request->getMLTaskRunsRequest->sort = new TaskRunSortCriteria();
    $request->getMLTaskRunsRequest->sort->column = TaskRunSortColumnTypeEnum::STARTED;
    $request->getMLTaskRunsRequest->sort->sortDirection = SortDirectionTypeEnum::ASCENDING;
    $request->getMLTaskRunsRequest->transformId = 'esse';
    $request->maxResults = 'labore';
    $request->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetMLTaskRunsXAmzTargetEnum::AWS_GLUE_GET_ML_TASK_RUNS;

    $response = $sdk->sdk->getMLTaskRuns($request);

    if ($response->getMLTaskRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMLTransform

Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTransformXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMLTransformRequest();
    $request->getMLTransformRequest = new GetMLTransformRequest();
    $request->getMLTransformRequest->transformId = 'iste';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = GetMLTransformXAmzTargetEnum::AWS_GLUE_GET_ML_TRANSFORM;

    $response = $sdk->sdk->getMLTransform($request);

    if ($response->getMLTransformResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMLTransforms

Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTransformsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMLTransformsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransformFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SchemaColumn;
use \OpenAPI\OpenAPI\Models\Shared\TransformStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TransformSortColumnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetMLTransformsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMLTransformsRequest();
    $request->getMLTransformsRequest = new GetMLTransformsRequest();
    $request->getMLTransformsRequest->filter = new TransformFilterCriteria();
    $request->getMLTransformsRequest->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-31T19:13:01.264Z');
    $request->getMLTransformsRequest->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T17:28:50.439Z');
    $request->getMLTransformsRequest->filter->glueVersion = 'quae';
    $request->getMLTransformsRequest->filter->lastModifiedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T12:26:41.334Z');
    $request->getMLTransformsRequest->filter->lastModifiedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-26T20:23:40.892Z');
    $request->getMLTransformsRequest->filter->name = 'Douglas Emard';
    $request->getMLTransformsRequest->filter->schema = [
        new SchemaColumn(),
        new SchemaColumn(),
        new SchemaColumn(),
    ];
    $request->getMLTransformsRequest->filter->status = TransformStatusTypeEnum::DELETING;
    $request->getMLTransformsRequest->filter->transformType = TransformTypeEnum::FIND_MATCHES;
    $request->getMLTransformsRequest->maxResults = 157222;
    $request->getMLTransformsRequest->nextToken = 'quia';
    $request->getMLTransformsRequest->sort = new TransformSortCriteria();
    $request->getMLTransformsRequest->sort->column = TransformSortColumnTypeEnum::TRANSFORM_TYPE;
    $request->getMLTransformsRequest->sort->sortDirection = SortDirectionTypeEnum::ASCENDING;
    $request->maxResults = 'libero';
    $request->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = GetMLTransformsXAmzTargetEnum::AWS_GLUE_GET_ML_TRANSFORMS;

    $response = $sdk->sdk->getMLTransforms($request);

    if ($response->getMLTransformsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMapping

Creates mappings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetMappingRequest;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenNodeArg;
use \OpenAPI\OpenAPI\Models\Shared\CatalogEntry;
use \OpenAPI\OpenAPI\Models\Operations\GetMappingXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMappingRequest();
    $request->getMappingRequest = new GetMappingRequest();
    $request->getMappingRequest->location = new Location();
    $request->getMappingRequest->location->dynamoDB = [
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
    ];
    $request->getMappingRequest->location->jdbc = [
        new CodeGenNodeArg(),
    ];
    $request->getMappingRequest->location->s3 = [
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
    ];
    $request->getMappingRequest->sinks = [
        new CatalogEntry(),
    ];
    $request->getMappingRequest->source = new CatalogEntry();
    $request->getMappingRequest->source->databaseName = 'aperiam';
    $request->getMappingRequest->source->tableName = 'totam';
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'dolores';
    $request->xAmzTarget = GetMappingXAmzTargetEnum::AWS_GLUE_GET_MAPPING;

    $response = $sdk->sdk->getMapping($request);

    if ($response->getMappingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPartition

Retrieves information about a specified partition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPartitionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartitionRequest();
    $request->getPartitionRequest = new GetPartitionRequest();
    $request->getPartitionRequest->catalogId = 'assumenda';
    $request->getPartitionRequest->databaseName = 'beatae';
    $request->getPartitionRequest->partitionValues = [
        'facere',
        'corrupti',
        'molestiae',
    ];
    $request->getPartitionRequest->tableName = 'provident';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'autem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = GetPartitionXAmzTargetEnum::AWS_GLUE_GET_PARTITION;

    $response = $sdk->sdk->getPartition($request);

    if ($response->getPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPartitionIndexes

Retrieves the partition indexes associated with a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionIndexesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPartitionIndexesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionIndexesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartitionIndexesRequest();
    $request->getPartitionIndexesRequest = new GetPartitionIndexesRequest();
    $request->getPartitionIndexesRequest->catalogId = 'rerum';
    $request->getPartitionIndexesRequest->databaseName = 'laudantium';
    $request->getPartitionIndexesRequest->nextToken = 'corporis';
    $request->getPartitionIndexesRequest->tableName = 'officiis';
    $request->nextToken = 'voluptatibus';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = GetPartitionIndexesXAmzTargetEnum::AWS_GLUE_GET_PARTITION_INDEXES;

    $response = $sdk->sdk->getPartitionIndexes($request);

    if ($response->getPartitionIndexesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPartitions

Retrieves information about the partitions in a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPartitionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Segment;
use \OpenAPI\OpenAPI\Models\Operations\GetPartitionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPartitionsRequest();
    $request->getPartitionsRequest = new GetPartitionsRequest();
    $request->getPartitionsRequest->catalogId = 'accusantium';
    $request->getPartitionsRequest->databaseName = 'expedita';
    $request->getPartitionsRequest->excludeColumnSchema = false;
    $request->getPartitionsRequest->expression = 'officiis';
    $request->getPartitionsRequest->maxResults = 177005;
    $request->getPartitionsRequest->nextToken = 'quibusdam';
    $request->getPartitionsRequest->queryAsOfTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-28T19:16:42.798Z');
    $request->getPartitionsRequest->segment = new Segment();
    $request->getPartitionsRequest->segment->segmentNumber = 140316;
    $request->getPartitionsRequest->segment->totalSegments = 127688;
    $request->getPartitionsRequest->tableName = 'corporis';
    $request->getPartitionsRequest->transactionId = 'error';
    $request->maxResults = 'earum';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'ut';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'unde';
    $request->xAmzTarget = GetPartitionsXAmzTargetEnum::AWS_GLUE_GET_PARTITIONS;

    $response = $sdk->sdk->getPartitions($request);

    if ($response->getPartitionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPlan

Gets code to perform a specified mapping.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\LanguageEnum;
use \OpenAPI\OpenAPI\Models\Shared\Location;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenNodeArg;
use \OpenAPI\OpenAPI\Models\Shared\MappingEntry;
use \OpenAPI\OpenAPI\Models\Shared\CatalogEntry;
use \OpenAPI\OpenAPI\Models\Operations\GetPlanXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPlanRequest();
    $request->getPlanRequest = new GetPlanRequest();
    $request->getPlanRequest->additionalPlanOptionsMap = [
        'delectus' => 'cupiditate',
        'fugit' => 'numquam',
    ];
    $request->getPlanRequest->language = LanguageEnum::PYTHON;
    $request->getPlanRequest->location = new Location();
    $request->getPlanRequest->location->dynamoDB = [
        new CodeGenNodeArg(),
    ];
    $request->getPlanRequest->location->jdbc = [
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
    ];
    $request->getPlanRequest->location->s3 = [
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
        new CodeGenNodeArg(),
    ];
    $request->getPlanRequest->mapping = [
        new MappingEntry(),
        new MappingEntry(),
    ];
    $request->getPlanRequest->sinks = [
        new CatalogEntry(),
        new CatalogEntry(),
        new CatalogEntry(),
        new CatalogEntry(),
    ];
    $request->getPlanRequest->source = new CatalogEntry();
    $request->getPlanRequest->source->databaseName = 'necessitatibus';
    $request->getPlanRequest->source->tableName = 'corporis';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = GetPlanXAmzTargetEnum::AWS_GLUE_GET_PLAN;

    $response = $sdk->sdk->getPlan($request);

    if ($response->getPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegistry

Describes the specified registry in detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetRegistryInput;
use \OpenAPI\OpenAPI\Models\Shared\RegistryId;
use \OpenAPI\OpenAPI\Models\Operations\GetRegistryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegistryRequest();
    $request->getRegistryInput = new GetRegistryInput();
    $request->getRegistryInput->registryId = new RegistryId();
    $request->getRegistryInput->registryId->registryArn = 'neque';
    $request->getRegistryInput->registryId->registryName = 'in';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = GetRegistryXAmzTargetEnum::AWS_GLUE_GET_REGISTRY;

    $response = $sdk->sdk->getRegistry($request);

    if ($response->getRegistryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicies

<p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePoliciesRequest();
    $request->getResourcePoliciesRequest = new GetResourcePoliciesRequest();
    $request->getResourcePoliciesRequest->maxResults = 731744;
    $request->getResourcePoliciesRequest->nextToken = 'aperiam';
    $request->maxResults = 'libero';
    $request->nextToken = 'ratione';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = GetResourcePoliciesXAmzTargetEnum::AWS_GLUE_GET_RESOURCE_POLICIES;

    $response = $sdk->sdk->getResourcePolicies($request);

    if ($response->getResourcePoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

Retrieves a specified resource policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest = new GetResourcePolicyRequest();
    $request->getResourcePolicyRequest->resourceArn = 'fuga';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetResourcePolicyXAmzTargetEnum::AWS_GLUE_GET_RESOURCE_POLICY;

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchema

Describes the specified schema in detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSchemaInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaRequest();
    $request->getSchemaInput = new GetSchemaInput();
    $request->getSchemaInput->schemaId = new SchemaId();
    $request->getSchemaInput->schemaId->registryName = 'repellat';
    $request->getSchemaInput->schemaId->schemaArn = 'pariatur';
    $request->getSchemaInput->schemaId->schemaName = 'nemo';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = GetSchemaXAmzTargetEnum::AWS_GLUE_GET_SCHEMA;

    $response = $sdk->sdk->getSchema($request);

    if ($response->getSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaByDefinition

Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaByDefinitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSchemaByDefinitionInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaByDefinitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaByDefinitionRequest();
    $request->getSchemaByDefinitionInput = new GetSchemaByDefinitionInput();
    $request->getSchemaByDefinitionInput->schemaDefinition = 'dolores';
    $request->getSchemaByDefinitionInput->schemaId = new SchemaId();
    $request->getSchemaByDefinitionInput->schemaId->registryName = 'error';
    $request->getSchemaByDefinitionInput->schemaId->schemaArn = 'veritatis';
    $request->getSchemaByDefinitionInput->schemaId->schemaName = 'ducimus';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = GetSchemaByDefinitionXAmzTargetEnum::AWS_GLUE_GET_SCHEMA_BY_DEFINITION;

    $response = $sdk->sdk->getSchemaByDefinition($request);

    if ($response->getSchemaByDefinitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaVersion

Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSchemaVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaVersionRequest();
    $request->getSchemaVersionInput = new GetSchemaVersionInput();
    $request->getSchemaVersionInput->schemaId = new SchemaId();
    $request->getSchemaVersionInput->schemaId->registryName = 'commodi';
    $request->getSchemaVersionInput->schemaId->schemaArn = 'officiis';
    $request->getSchemaVersionInput->schemaId->schemaName = 'placeat';
    $request->getSchemaVersionInput->schemaVersionId = 'quidem';
    $request->getSchemaVersionInput->schemaVersionNumber = new SchemaVersionNumber();
    $request->getSchemaVersionInput->schemaVersionNumber->latestVersion = false;
    $request->getSchemaVersionInput->schemaVersionNumber->versionNumber = 348192;
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = GetSchemaVersionXAmzTargetEnum::AWS_GLUE_GET_SCHEMA_VERSION;

    $response = $sdk->sdk->getSchemaVersion($request);

    if ($response->getSchemaVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaVersionsDiff

<p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaVersionsDiffRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSchemaVersionsDiffInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Shared\SchemaDiffTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaVersionsDiffXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaVersionsDiffRequest();
    $request->getSchemaVersionsDiffInput = new GetSchemaVersionsDiffInput();
    $request->getSchemaVersionsDiffInput->firstSchemaVersionNumber = new SchemaVersionNumber();
    $request->getSchemaVersionsDiffInput->firstSchemaVersionNumber->latestVersion = false;
    $request->getSchemaVersionsDiffInput->firstSchemaVersionNumber->versionNumber = 918547;
    $request->getSchemaVersionsDiffInput->schemaDiffType = SchemaDiffTypeEnum::SYNTAX_DIFF;
    $request->getSchemaVersionsDiffInput->schemaId = new SchemaId();
    $request->getSchemaVersionsDiffInput->schemaId->registryName = 'cum';
    $request->getSchemaVersionsDiffInput->schemaId->schemaArn = 'dicta';
    $request->getSchemaVersionsDiffInput->schemaId->schemaName = 'earum';
    $request->getSchemaVersionsDiffInput->secondSchemaVersionNumber = new SchemaVersionNumber();
    $request->getSchemaVersionsDiffInput->secondSchemaVersionNumber->latestVersion = false;
    $request->getSchemaVersionsDiffInput->secondSchemaVersionNumber->versionNumber = 334474;
    $request->xAmzAlgorithm = 'animi';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = GetSchemaVersionsDiffXAmzTargetEnum::AWS_GLUE_GET_SCHEMA_VERSIONS_DIFF;

    $response = $sdk->sdk->getSchemaVersionsDiff($request);

    if ($response->getSchemaVersionsDiffResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityConfiguration

Retrieves a specified security configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSecurityConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityConfigurationRequest();
    $request->getSecurityConfigurationRequest = new GetSecurityConfigurationRequest();
    $request->getSecurityConfigurationRequest->name = 'Mr. Dora Wuckert';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = GetSecurityConfigurationXAmzTargetEnum::AWS_GLUE_GET_SECURITY_CONFIGURATION;

    $response = $sdk->sdk->getSecurityConfiguration($request);

    if ($response->getSecurityConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSecurityConfigurations

Retrieves a list of all security configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSecurityConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSecurityConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSecurityConfigurationsRequest();
    $request->getSecurityConfigurationsRequest = new GetSecurityConfigurationsRequest();
    $request->getSecurityConfigurationsRequest->maxResults = 988749;
    $request->getSecurityConfigurationsRequest->nextToken = 'eligendi';
    $request->maxResults = 'sint';
    $request->nextToken = 'enim';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'quas';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = GetSecurityConfigurationsXAmzTargetEnum::AWS_GLUE_GET_SECURITY_CONFIGURATIONS;

    $response = $sdk->sdk->getSecurityConfigurations($request);

    if ($response->getSecurityConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSession

Retrieves the session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSessionRequest();
    $request->getSessionRequest = new GetSessionRequest();
    $request->getSessionRequest->id = 'e189dbb3-0fcb-433e-a055-b197cd44e2f5';
    $request->getSessionRequest->requestOrigin = 'consequuntur';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odit';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = GetSessionXAmzTargetEnum::AWS_GLUE_GET_SESSION;

    $response = $sdk->sdk->getSession($request);

    if ($response->getSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStatement

Retrieves the statement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStatementRequest();
    $request->getStatementRequest = new GetStatementRequest();
    $request->getStatementRequest->id = 242637;
    $request->getStatementRequest->requestOrigin = 'facilis';
    $request->getStatementRequest->sessionId = 'tempore';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = GetStatementXAmzTargetEnum::AWS_GLUE_GET_STATEMENT;

    $response = $sdk->sdk->getStatement($request);

    if ($response->getStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTable

Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableRequest();
    $request->getTableRequest = new GetTableRequest();
    $request->getTableRequest->catalogId = 'nisi';
    $request->getTableRequest->databaseName = 'libero';
    $request->getTableRequest->name = 'Carroll Purdy';
    $request->getTableRequest->queryAsOfTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-29T19:48:36.420Z');
    $request->getTableRequest->transactionId = 'consequuntur';
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = GetTableXAmzTargetEnum::AWS_GLUE_GET_TABLE;

    $response = $sdk->sdk->getTable($request);

    if ($response->getTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTableVersion

Retrieves a specified version of a table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableVersionRequest();
    $request->getTableVersionRequest = new GetTableVersionRequest();
    $request->getTableVersionRequest->catalogId = 'iusto';
    $request->getTableVersionRequest->databaseName = 'est';
    $request->getTableVersionRequest->tableName = 'rem';
    $request->getTableVersionRequest->versionId = 'eligendi';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'unde';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'ducimus';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'error';
    $request->xAmzTarget = GetTableVersionXAmzTargetEnum::AWS_GLUE_GET_TABLE_VERSION;

    $response = $sdk->sdk->getTableVersion($request);

    if ($response->getTableVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTableVersions

Retrieves a list of strings that identify available versions of a specified table.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTableVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTableVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTableVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTableVersionsRequest();
    $request->getTableVersionsRequest = new GetTableVersionsRequest();
    $request->getTableVersionsRequest->catalogId = 'porro';
    $request->getTableVersionsRequest->databaseName = 'vitae';
    $request->getTableVersionsRequest->maxResults = 491591;
    $request->getTableVersionsRequest->nextToken = 'esse';
    $request->getTableVersionsRequest->tableName = 'fugiat';
    $request->maxResults = 'ad';
    $request->nextToken = 'aspernatur';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = GetTableVersionsXAmzTargetEnum::AWS_GLUE_GET_TABLE_VERSIONS;

    $response = $sdk->sdk->getTableVersions($request);

    if ($response->getTableVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTables

Retrieves the definitions of some or all of the tables in a given <code>Database</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTablesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTablesRequest();
    $request->getTablesRequest = new GetTablesRequest();
    $request->getTablesRequest->catalogId = 'incidunt';
    $request->getTablesRequest->databaseName = 'accusamus';
    $request->getTablesRequest->expression = 'saepe';
    $request->getTablesRequest->maxResults = 734814;
    $request->getTablesRequest->nextToken = 'veniam';
    $request->getTablesRequest->queryAsOfTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-11T22:06:57.023Z');
    $request->getTablesRequest->transactionId = 'earum';
    $request->maxResults = 'reprehenderit';
    $request->nextToken = 'praesentium';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'illo';
    $request->xAmzTarget = GetTablesXAmzTargetEnum::AWS_GLUE_GET_TABLES;

    $response = $sdk->sdk->getTables($request);

    if ($response->getTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTags

Retrieves a list of tags associated with a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsRequest();
    $request->getTagsRequest = new GetTagsRequest();
    $request->getTagsRequest->resourceArn = 'labore';
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = GetTagsXAmzTargetEnum::AWS_GLUE_GET_TAGS;

    $response = $sdk->sdk->getTags($request);

    if ($response->getTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrigger

Retrieves the definition of a trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTriggerRequest();
    $request->getTriggerRequest = new GetTriggerRequest();
    $request->getTriggerRequest->name = 'Adam Reilly';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = GetTriggerXAmzTargetEnum::AWS_GLUE_GET_TRIGGER;

    $response = $sdk->sdk->getTrigger($request);

    if ($response->getTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTriggers

Gets all the triggers associated with a job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetTriggersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTriggersRequest();
    $request->getTriggersRequest = new GetTriggersRequest();
    $request->getTriggersRequest->dependentJobName = 'repellendus';
    $request->getTriggersRequest->maxResults = 434827;
    $request->getTriggersRequest->nextToken = 'dolorem';
    $request->maxResults = 'commodi';
    $request->nextToken = 'impedit';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'illum';
    $request->xAmzTarget = GetTriggersXAmzTargetEnum::AWS_GLUE_GET_TRIGGERS;

    $response = $sdk->sdk->getTriggers($request);

    if ($response->getTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnfilteredPartitionMetadata

<p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredPartitionMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUnfilteredPartitionMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuditContext;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredPartitionMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnfilteredPartitionMetadataRequest();
    $request->getUnfilteredPartitionMetadataRequest = new GetUnfilteredPartitionMetadataRequest();
    $request->getUnfilteredPartitionMetadataRequest->auditContext = new AuditContext();
    $request->getUnfilteredPartitionMetadataRequest->auditContext->additionalAuditContext = 'praesentium';
    $request->getUnfilteredPartitionMetadataRequest->auditContext->allColumnsRequested = false;
    $request->getUnfilteredPartitionMetadataRequest->auditContext->requestedColumns = [
        'cum',
        'amet',
        'quasi',
    ];
    $request->getUnfilteredPartitionMetadataRequest->catalogId = 'dicta';
    $request->getUnfilteredPartitionMetadataRequest->databaseName = 'laudantium';
    $request->getUnfilteredPartitionMetadataRequest->partitionValues = [
        'earum',
    ];
    $request->getUnfilteredPartitionMetadataRequest->supportedPermissionTypes = [
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
    ];
    $request->getUnfilteredPartitionMetadataRequest->tableName = 'dolorum';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = GetUnfilteredPartitionMetadataXAmzTargetEnum::AWS_GLUE_GET_UNFILTERED_PARTITION_METADATA;

    $response = $sdk->sdk->getUnfilteredPartitionMetadata($request);

    if ($response->getUnfilteredPartitionMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnfilteredPartitionsMetadata

<p>Retrieves partition metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredPartitionsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUnfilteredPartitionsMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuditContext;
use \OpenAPI\OpenAPI\Models\Shared\Segment;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredPartitionsMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnfilteredPartitionsMetadataRequest();
    $request->getUnfilteredPartitionsMetadataRequest = new GetUnfilteredPartitionsMetadataRequest();
    $request->getUnfilteredPartitionsMetadataRequest->auditContext = new AuditContext();
    $request->getUnfilteredPartitionsMetadataRequest->auditContext->additionalAuditContext = 'facilis';
    $request->getUnfilteredPartitionsMetadataRequest->auditContext->allColumnsRequested = false;
    $request->getUnfilteredPartitionsMetadataRequest->auditContext->requestedColumns = [
        'aperiam',
        'sint',
        'accusamus',
    ];
    $request->getUnfilteredPartitionsMetadataRequest->catalogId = 'eos';
    $request->getUnfilteredPartitionsMetadataRequest->databaseName = 'totam';
    $request->getUnfilteredPartitionsMetadataRequest->expression = 'dicta';
    $request->getUnfilteredPartitionsMetadataRequest->maxResults = 30661;
    $request->getUnfilteredPartitionsMetadataRequest->nextToken = 'velit';
    $request->getUnfilteredPartitionsMetadataRequest->segment = new Segment();
    $request->getUnfilteredPartitionsMetadataRequest->segment->segmentNumber = 224413;
    $request->getUnfilteredPartitionsMetadataRequest->segment->totalSegments = 124289;
    $request->getUnfilteredPartitionsMetadataRequest->supportedPermissionTypes = [
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::COLUMN_PERMISSION,
    ];
    $request->getUnfilteredPartitionsMetadataRequest->tableName = 'at';
    $request->maxResults = 'labore';
    $request->nextToken = 'minus';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'voluptatem';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = GetUnfilteredPartitionsMetadataXAmzTargetEnum::AWS_GLUE_GET_UNFILTERED_PARTITIONS_METADATA;

    $response = $sdk->sdk->getUnfilteredPartitionsMetadata($request);

    if ($response->getUnfilteredPartitionsMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUnfilteredTableMetadata

<p>Retrieves table metadata from the Data Catalog that contains unfiltered metadata.</p> <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredTableMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUnfilteredTableMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuditContext;
use \OpenAPI\OpenAPI\Models\Shared\PermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetUnfilteredTableMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnfilteredTableMetadataRequest();
    $request->getUnfilteredTableMetadataRequest = new GetUnfilteredTableMetadataRequest();
    $request->getUnfilteredTableMetadataRequest->auditContext = new AuditContext();
    $request->getUnfilteredTableMetadataRequest->auditContext->additionalAuditContext = 'repellat';
    $request->getUnfilteredTableMetadataRequest->auditContext->allColumnsRequested = false;
    $request->getUnfilteredTableMetadataRequest->auditContext->requestedColumns = [
        'porro',
    ];
    $request->getUnfilteredTableMetadataRequest->catalogId = 'provident';
    $request->getUnfilteredTableMetadataRequest->databaseName = 'consectetur';
    $request->getUnfilteredTableMetadataRequest->name = 'Cody Feil';
    $request->getUnfilteredTableMetadataRequest->supportedPermissionTypes = [
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::COLUMN_PERMISSION,
        PermissionTypeEnum::CELL_FILTER_PERMISSION,
        PermissionTypeEnum::COLUMN_PERMISSION,
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = GetUnfilteredTableMetadataXAmzTargetEnum::AWS_GLUE_GET_UNFILTERED_TABLE_METADATA;

    $response = $sdk->sdk->getUnfilteredTableMetadata($request);

    if ($response->getUnfilteredTableMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserDefinedFunction

Retrieves a specified function definition from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDefinedFunctionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserDefinedFunctionRequest();
    $request->getUserDefinedFunctionRequest = new GetUserDefinedFunctionRequest();
    $request->getUserDefinedFunctionRequest->catalogId = 'consectetur';
    $request->getUserDefinedFunctionRequest->databaseName = 'repellat';
    $request->getUserDefinedFunctionRequest->functionName = 'explicabo';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = GetUserDefinedFunctionXAmzTargetEnum::AWS_GLUE_GET_USER_DEFINED_FUNCTION;

    $response = $sdk->sdk->getUserDefinedFunction($request);

    if ($response->getUserDefinedFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserDefinedFunctions

Retrieves multiple function definitions from the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDefinedFunctionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetUserDefinedFunctionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUserDefinedFunctionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserDefinedFunctionsRequest();
    $request->getUserDefinedFunctionsRequest = new GetUserDefinedFunctionsRequest();
    $request->getUserDefinedFunctionsRequest->catalogId = 'deserunt';
    $request->getUserDefinedFunctionsRequest->databaseName = 'delectus';
    $request->getUserDefinedFunctionsRequest->maxResults = 251212;
    $request->getUserDefinedFunctionsRequest->nextToken = 'distinctio';
    $request->getUserDefinedFunctionsRequest->pattern = 'in';
    $request->maxResults = 'exercitationem';
    $request->nextToken = 'labore';
    $request->xAmzAlgorithm = 'numquam';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'explicabo';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = GetUserDefinedFunctionsXAmzTargetEnum::AWS_GLUE_GET_USER_DEFINED_FUNCTIONS;

    $response = $sdk->sdk->getUserDefinedFunctions($request);

    if ($response->getUserDefinedFunctionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflow

Retrieves resource metadata for a workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRequest();
    $request->getWorkflowRequest = new GetWorkflowRequest();
    $request->getWorkflowRequest->includeGraph = false;
    $request->getWorkflowRequest->name = 'Kathy Leuschke';
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = GetWorkflowXAmzTargetEnum::AWS_GLUE_GET_WORKFLOW;

    $response = $sdk->sdk->getWorkflow($request);

    if ($response->getWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowRun

Retrieves the metadata for a given workflow run. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRunRequest();
    $request->getWorkflowRunRequest = new GetWorkflowRunRequest();
    $request->getWorkflowRunRequest->includeGraph = false;
    $request->getWorkflowRunRequest->name = 'Angie Kunde';
    $request->getWorkflowRunRequest->runId = 'molestiae';
    $request->xAmzAlgorithm = 'veniam';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'eveniet';
    $request->xAmzTarget = GetWorkflowRunXAmzTargetEnum::AWS_GLUE_GET_WORKFLOW_RUN;

    $response = $sdk->sdk->getWorkflowRun($request);

    if ($response->getWorkflowRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowRunProperties

Retrieves the workflow run properties which were set during the run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkflowRunPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRunPropertiesRequest();
    $request->getWorkflowRunPropertiesRequest = new GetWorkflowRunPropertiesRequest();
    $request->getWorkflowRunPropertiesRequest->name = 'Gertrude Gerhold';
    $request->getWorkflowRunPropertiesRequest->runId = 'voluptate';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = GetWorkflowRunPropertiesXAmzTargetEnum::AWS_GLUE_GET_WORKFLOW_RUN_PROPERTIES;

    $response = $sdk->sdk->getWorkflowRunProperties($request);

    if ($response->getWorkflowRunPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkflowRuns

Retrieves metadata for all runs of a given workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetWorkflowRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetWorkflowRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWorkflowRunsRequest();
    $request->getWorkflowRunsRequest = new GetWorkflowRunsRequest();
    $request->getWorkflowRunsRequest->includeGraph = false;
    $request->getWorkflowRunsRequest->maxResults = 481375;
    $request->getWorkflowRunsRequest->name = 'Henry Purdy';
    $request->getWorkflowRunsRequest->nextToken = 'fuga';
    $request->maxResults = 'alias';
    $request->nextToken = 'rem';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = GetWorkflowRunsXAmzTargetEnum::AWS_GLUE_GET_WORKFLOW_RUNS;

    $response = $sdk->sdk->getWorkflowRuns($request);

    if ($response->getWorkflowRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCatalogToGlue

Imports an existing Amazon Athena Data Catalog to Glue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCatalogToGlueRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCatalogToGlueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportCatalogToGlueXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCatalogToGlueRequest();
    $request->importCatalogToGlueRequest = new ImportCatalogToGlueRequest();
    $request->importCatalogToGlueRequest->catalogId = 'saepe';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzTarget = ImportCatalogToGlueXAmzTargetEnum::AWS_GLUE_IMPORT_CATALOG_TO_GLUE;

    $response = $sdk->sdk->importCatalogToGlue($request);

    if ($response->importCatalogToGlueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBlueprints

Lists all the blueprint names in an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBlueprintsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBlueprintsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBlueprintsRequest();
    $request->listBlueprintsRequest = new ListBlueprintsRequest();
    $request->listBlueprintsRequest->maxResults = 910073;
    $request->listBlueprintsRequest->nextToken = 'hic';
    $request->listBlueprintsRequest->tags = [
        'incidunt' => 'qui',
    ];
    $request->maxResults = 'qui';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'optio';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListBlueprintsXAmzTargetEnum::AWS_GLUE_LIST_BLUEPRINTS;

    $response = $sdk->sdk->listBlueprints($request);

    if ($response->listBlueprintsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCrawlers

<p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCrawlersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCrawlersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCrawlersRequest();
    $request->listCrawlersRequest = new ListCrawlersRequest();
    $request->listCrawlersRequest->maxResults = 562948;
    $request->listCrawlersRequest->nextToken = 'officia';
    $request->listCrawlersRequest->tags = [
        'totam' => 'sequi',
        'aliquid' => 'ea',
        'impedit' => 'ducimus',
    ];
    $request->maxResults = 'odit';
    $request->nextToken = 'velit';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = ListCrawlersXAmzTargetEnum::AWS_GLUE_LIST_CRAWLERS;

    $response = $sdk->sdk->listCrawlers($request);

    if ($response->listCrawlersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCrawls

<p>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned.</p> <p>You may use this API to:</p> <ul> <li> <p>Retrive all the crawls of a specified crawler.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler within a limited count.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler in a specific time range.</p> </li> <li> <p>Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCrawlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCrawlsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CrawlsFilter;
use \OpenAPI\OpenAPI\Models\Shared\FieldNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListCrawlsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCrawlsRequest();
    $request->listCrawlsRequest = new ListCrawlsRequest();
    $request->listCrawlsRequest->crawlerName = 'nisi';
    $request->listCrawlsRequest->filters = [
        new CrawlsFilter(),
        new CrawlsFilter(),
        new CrawlsFilter(),
    ];
    $request->listCrawlsRequest->maxResults = 924840;
    $request->listCrawlsRequest->nextToken = 'voluptates';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListCrawlsXAmzTargetEnum::AWS_GLUE_LIST_CRAWLS;

    $response = $sdk->sdk->listCrawls($request);

    if ($response->listCrawlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomEntityTypes

Lists all the custom patterns that have been created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomEntityTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomEntityTypesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomEntityTypesRequest();
    $request->listCustomEntityTypesRequest = new ListCustomEntityTypesRequest();
    $request->listCustomEntityTypesRequest->maxResults = 754901;
    $request->listCustomEntityTypesRequest->nextToken = 'quae';
    $request->maxResults = 'officiis';
    $request->nextToken = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListCustomEntityTypesXAmzTargetEnum::AWS_GLUE_LIST_CUSTOM_ENTITY_TYPES;

    $response = $sdk->sdk->listCustomEntityTypes($request);

    if ($response->listCustomEntityTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataQualityResults

Returns all data quality execution results for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataQualityResultsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityResultFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityResultsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataQualityResultsRequest();
    $request->listDataQualityResultsRequest = new ListDataQualityResultsRequest();
    $request->listDataQualityResultsRequest->filter = new DataQualityResultFilterCriteria();
    $request->listDataQualityResultsRequest->filter->dataSource = new DataSource();
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable = new GlueTable();
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable->additionalOptions = [
        'iste' => 'dicta',
        'quos' => 'ullam',
        'dolore' => 'modi',
        'itaque' => 'maxime',
    ];
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable->catalogId = 'modi';
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable->connectionName = 'consequuntur';
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable->databaseName = 'assumenda';
    $request->listDataQualityResultsRequest->filter->dataSource->glueTable->tableName = 'vero';
    $request->listDataQualityResultsRequest->filter->jobName = 'doloribus';
    $request->listDataQualityResultsRequest->filter->jobRunId = 'impedit';
    $request->listDataQualityResultsRequest->filter->startedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-08T05:14:46.440Z');
    $request->listDataQualityResultsRequest->filter->startedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-01-23T12:10:51.370Z');
    $request->listDataQualityResultsRequest->maxResults = 66074;
    $request->listDataQualityResultsRequest->nextToken = 'sint';
    $request->maxResults = 'nihil';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = ListDataQualityResultsXAmzTargetEnum::AWS_GLUE_LIST_DATA_QUALITY_RESULTS;

    $response = $sdk->sdk->listDataQualityResults($request);

    if ($response->listDataQualityResultsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataQualityRuleRecommendationRuns

Lists the recommendation runs meeting the filter criteria.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRuleRecommendationRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataQualityRuleRecommendationRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityRuleRecommendationRunFilter;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRuleRecommendationRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataQualityRuleRecommendationRunsRequest();
    $request->listDataQualityRuleRecommendationRunsRequest = new ListDataQualityRuleRecommendationRunsRequest();
    $request->listDataQualityRuleRecommendationRunsRequest->filter = new DataQualityRuleRecommendationRunFilter();
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource = new DataSource();
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable = new GlueTable();
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable->additionalOptions = [
        'consequuntur' => 'officia',
        'reprehenderit' => 'distinctio',
    ];
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable->catalogId = 'eius';
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable->connectionName = 'ipsa';
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable->databaseName = 'rem';
    $request->listDataQualityRuleRecommendationRunsRequest->filter->dataSource->glueTable->tableName = 'maiores';
    $request->listDataQualityRuleRecommendationRunsRequest->filter->startedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-02T00:28:51.543Z');
    $request->listDataQualityRuleRecommendationRunsRequest->filter->startedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T08:39:00.501Z');
    $request->listDataQualityRuleRecommendationRunsRequest->maxResults = 816365;
    $request->listDataQualityRuleRecommendationRunsRequest->nextToken = 'aliquam';
    $request->maxResults = 'quos';
    $request->nextToken = 'doloribus';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'nesciunt';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzTarget = ListDataQualityRuleRecommendationRunsXAmzTargetEnum::AWS_GLUE_LIST_DATA_QUALITY_RULE_RECOMMENDATION_RUNS;

    $response = $sdk->sdk->listDataQualityRuleRecommendationRuns($request);

    if ($response->listDataQualityRuleRecommendationRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataQualityRulesetEvaluationRuns

Lists all the runs meeting the filter criteria, where a ruleset is evaluated against a data source.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRulesetEvaluationRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataQualityRulesetEvaluationRunsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityRulesetEvaluationRunFilter;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRulesetEvaluationRunsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataQualityRulesetEvaluationRunsRequest();
    $request->listDataQualityRulesetEvaluationRunsRequest = new ListDataQualityRulesetEvaluationRunsRequest();
    $request->listDataQualityRulesetEvaluationRunsRequest->filter = new DataQualityRulesetEvaluationRunFilter();
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource = new DataSource();
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable = new GlueTable();
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable->additionalOptions = [
        'repellat' => 'nemo',
    ];
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable->catalogId = 'doloribus';
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable->connectionName = 'possimus';
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable->databaseName = 'unde';
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->dataSource->glueTable->tableName = 'incidunt';
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->startedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T12:01:08.337Z');
    $request->listDataQualityRulesetEvaluationRunsRequest->filter->startedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-24T03:37:44.417Z');
    $request->listDataQualityRulesetEvaluationRunsRequest->maxResults = 2064;
    $request->listDataQualityRulesetEvaluationRunsRequest->nextToken = 'quidem';
    $request->maxResults = 'nesciunt';
    $request->nextToken = 'commodi';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'ut';
    $request->xAmzTarget = ListDataQualityRulesetEvaluationRunsXAmzTargetEnum::AWS_GLUE_LIST_DATA_QUALITY_RULESET_EVALUATION_RUNS;

    $response = $sdk->sdk->listDataQualityRulesetEvaluationRuns($request);

    if ($response->listDataQualityRulesetEvaluationRunsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDataQualityRulesets

Returns a paginated list of rulesets for the specified list of Glue tables.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRulesetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDataQualityRulesetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityRulesetFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityTargetTable;
use \OpenAPI\OpenAPI\Models\Operations\ListDataQualityRulesetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDataQualityRulesetsRequest();
    $request->listDataQualityRulesetsRequest = new ListDataQualityRulesetsRequest();
    $request->listDataQualityRulesetsRequest->filter = new DataQualityRulesetFilterCriteria();
    $request->listDataQualityRulesetsRequest->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-20T01:04:48.949Z');
    $request->listDataQualityRulesetsRequest->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-10T01:49:31.506Z');
    $request->listDataQualityRulesetsRequest->filter->description = 'in';
    $request->listDataQualityRulesetsRequest->filter->lastModifiedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-06T20:25:49.990Z');
    $request->listDataQualityRulesetsRequest->filter->lastModifiedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-17T13:49:16.488Z');
    $request->listDataQualityRulesetsRequest->filter->name = 'May Huel';
    $request->listDataQualityRulesetsRequest->filter->targetTable = new DataQualityTargetTable();
    $request->listDataQualityRulesetsRequest->filter->targetTable->databaseName = 'ducimus';
    $request->listDataQualityRulesetsRequest->filter->targetTable->tableName = 'fuga';
    $request->listDataQualityRulesetsRequest->maxResults = 326903;
    $request->listDataQualityRulesetsRequest->nextToken = 'architecto';
    $request->listDataQualityRulesetsRequest->tags = [
        'aliquid' => 'magni',
    ];
    $request->maxResults = 'incidunt';
    $request->nextToken = 'adipisci';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = ListDataQualityRulesetsXAmzTargetEnum::AWS_GLUE_LIST_DATA_QUALITY_RULESETS;

    $response = $sdk->sdk->listDataQualityRulesets($request);

    if ($response->listDataQualityRulesetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevEndpoints

<p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDevEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevEndpointsRequest();
    $request->listDevEndpointsRequest = new ListDevEndpointsRequest();
    $request->listDevEndpointsRequest->maxResults = 363482;
    $request->listDevEndpointsRequest->nextToken = 'culpa';
    $request->listDevEndpointsRequest->tags = [
        'amet' => 'deserunt',
    ];
    $request->maxResults = 'modi';
    $request->nextToken = 'veniam';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = ListDevEndpointsXAmzTargetEnum::AWS_GLUE_LIST_DEV_ENDPOINTS;

    $response = $sdk->sdk->listDevEndpoints($request);

    if ($response->listDevEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

<p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->listJobsRequest = new ListJobsRequest();
    $request->listJobsRequest->maxResults = 887363;
    $request->listJobsRequest->nextToken = 'architecto';
    $request->listJobsRequest->tags = [
        'culpa' => 'ipsa',
    ];
    $request->maxResults = 'nobis';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListJobsXAmzTargetEnum::AWS_GLUE_LIST_JOBS;

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMLTransforms

 Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListMLTransformsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListMLTransformsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransformFilterCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SchemaColumn;
use \OpenAPI\OpenAPI\Models\Shared\TransformStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransformSortCriteria;
use \OpenAPI\OpenAPI\Models\Shared\TransformSortColumnTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListMLTransformsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMLTransformsRequest();
    $request->listMLTransformsRequest = new ListMLTransformsRequest();
    $request->listMLTransformsRequest->filter = new TransformFilterCriteria();
    $request->listMLTransformsRequest->filter->createdAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-25T09:28:32.278Z');
    $request->listMLTransformsRequest->filter->createdBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-30T10:28:19.125Z');
    $request->listMLTransformsRequest->filter->glueVersion = 'cumque';
    $request->listMLTransformsRequest->filter->lastModifiedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-27T12:33:36.193Z');
    $request->listMLTransformsRequest->filter->lastModifiedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-29T06:28:27.205Z');
    $request->listMLTransformsRequest->filter->name = 'Melvin Gusikowski';
    $request->listMLTransformsRequest->filter->schema = [
        new SchemaColumn(),
    ];
    $request->listMLTransformsRequest->filter->status = TransformStatusTypeEnum::READY;
    $request->listMLTransformsRequest->filter->transformType = TransformTypeEnum::FIND_MATCHES;
    $request->listMLTransformsRequest->maxResults = 616941;
    $request->listMLTransformsRequest->nextToken = 'provident';
    $request->listMLTransformsRequest->sort = new TransformSortCriteria();
    $request->listMLTransformsRequest->sort->column = TransformSortColumnTypeEnum::CREATED;
    $request->listMLTransformsRequest->sort->sortDirection = SortDirectionTypeEnum::ASCENDING;
    $request->listMLTransformsRequest->tags = [
        'quidem' => 'itaque',
        'laboriosam' => 'unde',
        'modi' => 'perspiciatis',
    ];
    $request->maxResults = 'hic';
    $request->nextToken = 'cum';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = ListMLTransformsXAmzTargetEnum::AWS_GLUE_LIST_ML_TRANSFORMS;

    $response = $sdk->sdk->listMLTransforms($request);

    if ($response->listMLTransformsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRegistries

Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRegistriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRegistriesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListRegistriesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRegistriesRequest();
    $request->listRegistriesInput = new ListRegistriesInput();
    $request->listRegistriesInput->maxResults = 904440;
    $request->listRegistriesInput->nextToken = 'autem';
    $request->maxResults = 'quo';
    $request->nextToken = 'nesciunt';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = ListRegistriesXAmzTargetEnum::AWS_GLUE_LIST_REGISTRIES;

    $response = $sdk->sdk->listRegistries($request);

    if ($response->listRegistriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemaVersions

Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSchemaVersionsInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemaVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemaVersionsRequest();
    $request->listSchemaVersionsInput = new ListSchemaVersionsInput();
    $request->listSchemaVersionsInput->maxResults = 927977;
    $request->listSchemaVersionsInput->nextToken = 'distinctio';
    $request->listSchemaVersionsInput->schemaId = new SchemaId();
    $request->listSchemaVersionsInput->schemaId->registryName = 'pariatur';
    $request->listSchemaVersionsInput->schemaId->schemaArn = 'ad';
    $request->listSchemaVersionsInput->schemaId->schemaName = 'facere';
    $request->maxResults = 'laborum';
    $request->nextToken = 'eveniet';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ListSchemaVersionsXAmzTargetEnum::AWS_GLUE_LIST_SCHEMA_VERSIONS;

    $response = $sdk->sdk->listSchemaVersions($request);

    if ($response->listSchemaVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSchemas

<p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSchemasInput;
use \OpenAPI\OpenAPI\Models\Shared\RegistryId;
use \OpenAPI\OpenAPI\Models\Operations\ListSchemasXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSchemasRequest();
    $request->listSchemasInput = new ListSchemasInput();
    $request->listSchemasInput->maxResults = 560451;
    $request->listSchemasInput->nextToken = 'laborum';
    $request->listSchemasInput->registryId = new RegistryId();
    $request->listSchemasInput->registryId->registryArn = 'est';
    $request->listSchemasInput->registryId->registryName = 'occaecati';
    $request->maxResults = 'labore';
    $request->nextToken = 'quo';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = ListSchemasXAmzTargetEnum::AWS_GLUE_LIST_SCHEMAS;

    $response = $sdk->sdk->listSchemas($request);

    if ($response->listSchemasResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSessions

Retrieve a list of sessions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSessionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSessionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSessionsRequest();
    $request->listSessionsRequest = new ListSessionsRequest();
    $request->listSessionsRequest->maxResults = 342921;
    $request->listSessionsRequest->nextToken = 'officiis';
    $request->listSessionsRequest->requestOrigin = 'unde';
    $request->listSessionsRequest->tags = [
        'error' => 'mollitia',
        'magnam' => 'nostrum',
        'esse' => 'corrupti',
        'fuga' => 'facere',
    ];
    $request->maxResults = 'impedit';
    $request->nextToken = 'quasi';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = ListSessionsXAmzTargetEnum::AWS_GLUE_LIST_SESSIONS;

    $response = $sdk->sdk->listSessions($request);

    if ($response->listSessionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listStatements

Lists statements for the session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListStatementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListStatementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListStatementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListStatementsRequest();
    $request->listStatementsRequest = new ListStatementsRequest();
    $request->listStatementsRequest->nextToken = 'maxime';
    $request->listStatementsRequest->requestOrigin = 'consequatur';
    $request->listStatementsRequest->sessionId = 'eaque';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = ListStatementsXAmzTargetEnum::AWS_GLUE_LIST_STATEMENTS;

    $response = $sdk->sdk->listStatements($request);

    if ($response->listStatementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTriggers

<p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTriggersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTriggersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTriggersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTriggersRequest();
    $request->listTriggersRequest = new ListTriggersRequest();
    $request->listTriggersRequest->dependentJobName = 'sed';
    $request->listTriggersRequest->maxResults = 898111;
    $request->listTriggersRequest->nextToken = 'impedit';
    $request->listTriggersRequest->tags = [
        'excepturi' => 'a',
    ];
    $request->maxResults = 'maiores';
    $request->nextToken = 'laudantium';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzTarget = ListTriggersXAmzTargetEnum::AWS_GLUE_LIST_TRIGGERS;

    $response = $sdk->sdk->listTriggers($request);

    if ($response->listTriggersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflows

Lists names of workflows created in the account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowsRequest();
    $request->listWorkflowsRequest = new ListWorkflowsRequest();
    $request->listWorkflowsRequest->maxResults = 985360;
    $request->listWorkflowsRequest->nextToken = 'velit';
    $request->maxResults = 'eius';
    $request->nextToken = 'esse';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'eligendi';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = ListWorkflowsXAmzTargetEnum::AWS_GLUE_LIST_WORKFLOWS;

    $response = $sdk->sdk->listWorkflows($request);

    if ($response->listWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDataCatalogEncryptionSettings

Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDataCatalogEncryptionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutDataCatalogEncryptionSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataCatalogEncryptionSettings;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionPasswordEncryption;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionAtRest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogEncryptionModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutDataCatalogEncryptionSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDataCatalogEncryptionSettingsRequest();
    $request->putDataCatalogEncryptionSettingsRequest = new PutDataCatalogEncryptionSettingsRequest();
    $request->putDataCatalogEncryptionSettingsRequest->catalogId = 'qui';
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings = new DataCatalogEncryptionSettings();
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->connectionPasswordEncryption = new ConnectionPasswordEncryption();
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->connectionPasswordEncryption->awsKmsKeyId = 'impedit';
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->connectionPasswordEncryption->returnConnectionPasswordEncrypted = false;
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->encryptionAtRest = new EncryptionAtRest();
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->encryptionAtRest->catalogEncryptionMode = CatalogEncryptionModeEnum::DISABLED;
    $request->putDataCatalogEncryptionSettingsRequest->dataCatalogEncryptionSettings->encryptionAtRest->sseAwsKmsKeyId = 'incidunt';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = PutDataCatalogEncryptionSettingsXAmzTargetEnum::AWS_GLUE_PUT_DATA_CATALOG_ENCRYPTION_SETTINGS;

    $response = $sdk->sdk->putDataCatalogEncryptionSettings($request);

    if ($response->putDataCatalogEncryptionSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

Sets the Data Catalog resource policy for access control.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\EnableHybridValuesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExistConditionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->enableHybrid = EnableHybridValuesEnum::TRUE;
    $request->putResourcePolicyRequest->policyExistsCondition = ExistConditionEnum::NOT_EXIST;
    $request->putResourcePolicyRequest->policyHashCondition = 'laboriosam';
    $request->putResourcePolicyRequest->policyInJson = 'ex';
    $request->putResourcePolicyRequest->resourceArn = 'quas';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::AWS_GLUE_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSchemaVersionMetadata

Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSchemaVersionMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutSchemaVersionMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MetadataKeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Operations\PutSchemaVersionMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSchemaVersionMetadataRequest();
    $request->putSchemaVersionMetadataInput = new PutSchemaVersionMetadataInput();
    $request->putSchemaVersionMetadataInput->metadataKeyValue = new MetadataKeyValuePair();
    $request->putSchemaVersionMetadataInput->metadataKeyValue->metadataKey = 'deserunt';
    $request->putSchemaVersionMetadataInput->metadataKeyValue->metadataValue = 'delectus';
    $request->putSchemaVersionMetadataInput->schemaId = new SchemaId();
    $request->putSchemaVersionMetadataInput->schemaId->registryName = 'omnis';
    $request->putSchemaVersionMetadataInput->schemaId->schemaArn = 'sed';
    $request->putSchemaVersionMetadataInput->schemaId->schemaName = 'nesciunt';
    $request->putSchemaVersionMetadataInput->schemaVersionId = 'maxime';
    $request->putSchemaVersionMetadataInput->schemaVersionNumber = new SchemaVersionNumber();
    $request->putSchemaVersionMetadataInput->schemaVersionNumber->latestVersion = false;
    $request->putSchemaVersionMetadataInput->schemaVersionNumber->versionNumber = 337841;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = PutSchemaVersionMetadataXAmzTargetEnum::AWS_GLUE_PUT_SCHEMA_VERSION_METADATA;

    $response = $sdk->sdk->putSchemaVersionMetadata($request);

    if ($response->putSchemaVersionMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putWorkflowRunProperties

Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkflowRunPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutWorkflowRunPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutWorkflowRunPropertiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutWorkflowRunPropertiesRequest();
    $request->putWorkflowRunPropertiesRequest = new PutWorkflowRunPropertiesRequest();
    $request->putWorkflowRunPropertiesRequest->name = 'Renee Beer';
    $request->putWorkflowRunPropertiesRequest->runId = 'quas';
    $request->putWorkflowRunPropertiesRequest->runProperties = [
        'aliquid' => 'asperiores',
        'a' => 'nobis',
    ];
    $request->xAmzAlgorithm = 'perspiciatis';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = PutWorkflowRunPropertiesXAmzTargetEnum::AWS_GLUE_PUT_WORKFLOW_RUN_PROPERTIES;

    $response = $sdk->sdk->putWorkflowRunProperties($request);

    if ($response->putWorkflowRunPropertiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## querySchemaVersionMetadata

Queries for the schema version metadata information. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\QuerySchemaVersionMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\QuerySchemaVersionMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MetadataKeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Operations\QuerySchemaVersionMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QuerySchemaVersionMetadataRequest();
    $request->querySchemaVersionMetadataInput = new QuerySchemaVersionMetadataInput();
    $request->querySchemaVersionMetadataInput->maxResults = 735740;
    $request->querySchemaVersionMetadataInput->metadataList = [
        new MetadataKeyValuePair(),
        new MetadataKeyValuePair(),
        new MetadataKeyValuePair(),
    ];
    $request->querySchemaVersionMetadataInput->nextToken = 'modi';
    $request->querySchemaVersionMetadataInput->schemaId = new SchemaId();
    $request->querySchemaVersionMetadataInput->schemaId->registryName = 'voluptates';
    $request->querySchemaVersionMetadataInput->schemaId->schemaArn = 'fugit';
    $request->querySchemaVersionMetadataInput->schemaId->schemaName = 'eius';
    $request->querySchemaVersionMetadataInput->schemaVersionId = 'sequi';
    $request->querySchemaVersionMetadataInput->schemaVersionNumber = new SchemaVersionNumber();
    $request->querySchemaVersionMetadataInput->schemaVersionNumber->latestVersion = false;
    $request->querySchemaVersionMetadataInput->schemaVersionNumber->versionNumber = 758194;
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'animi';
    $request->xAmzTarget = QuerySchemaVersionMetadataXAmzTargetEnum::AWS_GLUE_QUERY_SCHEMA_VERSION_METADATA;

    $response = $sdk->sdk->querySchemaVersionMetadata($request);

    if ($response->querySchemaVersionMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerSchemaVersion

<p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterSchemaVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegisterSchemaVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Operations\RegisterSchemaVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterSchemaVersionRequest();
    $request->registerSchemaVersionInput = new RegisterSchemaVersionInput();
    $request->registerSchemaVersionInput->schemaDefinition = 'maiores';
    $request->registerSchemaVersionInput->schemaId = new SchemaId();
    $request->registerSchemaVersionInput->schemaId->registryName = 'itaque';
    $request->registerSchemaVersionInput->schemaId->schemaArn = 'nulla';
    $request->registerSchemaVersionInput->schemaId->schemaName = 'deserunt';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = RegisterSchemaVersionXAmzTargetEnum::AWS_GLUE_REGISTER_SCHEMA_VERSION;

    $response = $sdk->sdk->registerSchemaVersion($request);

    if ($response->registerSchemaVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeSchemaVersionMetadata

Removes a key value pair from the schema version metadata for the specified schema version ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSchemaVersionMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveSchemaVersionMetadataInput;
use \OpenAPI\OpenAPI\Models\Shared\MetadataKeyValuePair;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Operations\RemoveSchemaVersionMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveSchemaVersionMetadataRequest();
    $request->removeSchemaVersionMetadataInput = new RemoveSchemaVersionMetadataInput();
    $request->removeSchemaVersionMetadataInput->metadataKeyValue = new MetadataKeyValuePair();
    $request->removeSchemaVersionMetadataInput->metadataKeyValue->metadataKey = 'repudiandae';
    $request->removeSchemaVersionMetadataInput->metadataKeyValue->metadataValue = 'accusantium';
    $request->removeSchemaVersionMetadataInput->schemaId = new SchemaId();
    $request->removeSchemaVersionMetadataInput->schemaId->registryName = 'officia';
    $request->removeSchemaVersionMetadataInput->schemaId->schemaArn = 'impedit';
    $request->removeSchemaVersionMetadataInput->schemaId->schemaName = 'quasi';
    $request->removeSchemaVersionMetadataInput->schemaVersionId = 'blanditiis';
    $request->removeSchemaVersionMetadataInput->schemaVersionNumber = new SchemaVersionNumber();
    $request->removeSchemaVersionMetadataInput->schemaVersionNumber->latestVersion = false;
    $request->removeSchemaVersionMetadataInput->schemaVersionNumber->versionNumber = 260911;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = RemoveSchemaVersionMetadataXAmzTargetEnum::AWS_GLUE_REMOVE_SCHEMA_VERSION_METADATA;

    $response = $sdk->sdk->removeSchemaVersionMetadata($request);

    if ($response->removeSchemaVersionMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetJobBookmark

<p>Resets a bookmark entry.</p> <p>For more information about enabling and using job bookmarks, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetJobBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResetJobBookmarkRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResetJobBookmarkXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetJobBookmarkRequest();
    $request->resetJobBookmarkRequest = new ResetJobBookmarkRequest();
    $request->resetJobBookmarkRequest->jobName = 'reprehenderit';
    $request->resetJobBookmarkRequest->runId = 'quod';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'corrupti';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = ResetJobBookmarkXAmzTargetEnum::AWS_GLUE_RESET_JOB_BOOKMARK;

    $response = $sdk->sdk->resetJobBookmark($request);

    if ($response->resetJobBookmarkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeWorkflowRun

Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResumeWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResumeWorkflowRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeWorkflowRunRequest();
    $request->resumeWorkflowRunRequest = new ResumeWorkflowRunRequest();
    $request->resumeWorkflowRunRequest->name = 'Jana Brakus';
    $request->resumeWorkflowRunRequest->nodeIds = [
        'maiores',
    ];
    $request->resumeWorkflowRunRequest->runId = 'neque';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'veniam';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'veniam';
    $request->xAmzTarget = ResumeWorkflowRunXAmzTargetEnum::AWS_GLUE_RESUME_WORKFLOW_RUN;

    $response = $sdk->sdk->resumeWorkflowRun($request);

    if ($response->resumeWorkflowRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## runStatement

Executes the statement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RunStatementRequest;
use \OpenAPI\OpenAPI\Models\Shared\RunStatementRequest;
use \OpenAPI\OpenAPI\Models\Operations\RunStatementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RunStatementRequest();
    $request->runStatementRequest = new RunStatementRequest();
    $request->runStatementRequest->code = 'nihil';
    $request->runStatementRequest->requestOrigin = 'ad';
    $request->runStatementRequest->sessionId = 'nisi';
    $request->xAmzAlgorithm = 'tenetur';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'sit';
    $request->xAmzTarget = RunStatementXAmzTargetEnum::AWS_GLUE_RUN_STATEMENT;

    $response = $sdk->sdk->runStatement($request);

    if ($response->runStatementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTables

<p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchTablesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PropertyPredicate;
use \OpenAPI\OpenAPI\Models\Shared\ComparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortCriterion;
use \OpenAPI\OpenAPI\Models\Shared\SortEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTablesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTablesRequest();
    $request->maxResults = 'quidem';
    $request->nextToken = 'repellendus';
    $request->searchTablesRequest = new SearchTablesRequest();
    $request->searchTablesRequest->catalogId = 'perferendis';
    $request->searchTablesRequest->filters = [
        new PropertyPredicate(),
        new PropertyPredicate(),
        new PropertyPredicate(),
    ];
    $request->searchTablesRequest->maxResults = 958146;
    $request->searchTablesRequest->nextToken = 'sed';
    $request->searchTablesRequest->resourceShareType = ResourceShareTypeEnum::FEDERATED;
    $request->searchTablesRequest->searchText = 'repellat';
    $request->searchTablesRequest->sortCriteria = [
        new SortCriterion(),
        new SortCriterion(),
        new SortCriterion(),
        new SortCriterion(),
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = SearchTablesXAmzTargetEnum::AWS_GLUE_SEARCH_TABLES;

    $response = $sdk->sdk->searchTables($request);

    if ($response->searchTablesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBlueprintRun

Starts a new run of the specified blueprint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBlueprintRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartBlueprintRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartBlueprintRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBlueprintRunRequest();
    $request->startBlueprintRunRequest = new StartBlueprintRunRequest();
    $request->startBlueprintRunRequest->blueprintName = 'explicabo';
    $request->startBlueprintRunRequest->parameters = 'minus';
    $request->startBlueprintRunRequest->roleArn = 'soluta';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = StartBlueprintRunXAmzTargetEnum::AWS_GLUE_START_BLUEPRINT_RUN;

    $response = $sdk->sdk->startBlueprintRun($request);

    if ($response->startBlueprintRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCrawler

Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCrawlerRequest();
    $request->startCrawlerRequest = new StartCrawlerRequest();
    $request->startCrawlerRequest->name = 'Erick Pfeffer MD';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = StartCrawlerXAmzTargetEnum::AWS_GLUE_START_CRAWLER;

    $response = $sdk->sdk->startCrawler($request);

    if ($response->startCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCrawlerSchedule

Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartCrawlerScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCrawlerScheduleRequest();
    $request->startCrawlerScheduleRequest = new StartCrawlerScheduleRequest();
    $request->startCrawlerScheduleRequest->crawlerName = 'possimus';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = StartCrawlerScheduleXAmzTargetEnum::AWS_GLUE_START_CRAWLER_SCHEDULE;

    $response = $sdk->sdk->startCrawlerSchedule($request);

    if ($response->startCrawlerScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDataQualityRuleRecommendationRun

Starts a recommendation run that is used to generate rules when you don't know what rules to write. Glue Data Quality analyzes the data and comes up with recommendations for a potential ruleset. You can then triage the ruleset and modify the generated ruleset to your liking.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDataQualityRuleRecommendationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Operations\StartDataQualityRuleRecommendationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDataQualityRuleRecommendationRunRequest();
    $request->startDataQualityRuleRecommendationRunRequest = new StartDataQualityRuleRecommendationRunRequest();
    $request->startDataQualityRuleRecommendationRunRequest->clientToken = 'quo';
    $request->startDataQualityRuleRecommendationRunRequest->createdRulesetName = 'quos';
    $request->startDataQualityRuleRecommendationRunRequest->dataSource = new DataSource();
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable = new GlueTable();
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable->additionalOptions = [
        'voluptatum' => 'iste',
        'corporis' => 'accusantium',
        'illo' => 'aut',
        'doloribus' => 'nostrum',
    ];
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable->catalogId = 'at';
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable->connectionName = 'possimus';
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable->databaseName = 'neque';
    $request->startDataQualityRuleRecommendationRunRequest->dataSource->glueTable->tableName = 'pariatur';
    $request->startDataQualityRuleRecommendationRunRequest->numberOfWorkers = 424853;
    $request->startDataQualityRuleRecommendationRunRequest->role = 'sapiente';
    $request->startDataQualityRuleRecommendationRunRequest->timeout = 652515;
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = StartDataQualityRuleRecommendationRunXAmzTargetEnum::AWS_GLUE_START_DATA_QUALITY_RULE_RECOMMENDATION_RUN;

    $response = $sdk->sdk->startDataQualityRuleRecommendationRun($request);

    if ($response->startDataQualityRuleRecommendationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDataQualityRulesetEvaluationRun

Once you have a ruleset definition (either recommended or your own), you call this operation to evaluate the ruleset against a data source (Glue table). The evaluation computes results which you can retrieve with the <code>GetDataQualityResult</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartDataQualityRulesetEvaluationRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\DataQualityEvaluationRunAdditionalRunOptions;
use \OpenAPI\OpenAPI\Models\Shared\DataSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueTable;
use \OpenAPI\OpenAPI\Models\Operations\StartDataQualityRulesetEvaluationRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDataQualityRulesetEvaluationRunRequest();
    $request->startDataQualityRulesetEvaluationRunRequest = new StartDataQualityRulesetEvaluationRunRequest();
    $request->startDataQualityRulesetEvaluationRunRequest->additionalRunOptions = new DataQualityEvaluationRunAdditionalRunOptions();
    $request->startDataQualityRulesetEvaluationRunRequest->additionalRunOptions->cloudWatchMetricsEnabled = false;
    $request->startDataQualityRulesetEvaluationRunRequest->additionalRunOptions->resultsS3Prefix = 'quisquam';
    $request->startDataQualityRulesetEvaluationRunRequest->clientToken = 'quas';
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource = new DataSource();
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable = new GlueTable();
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable->additionalOptions = [
        'maiores' => 'inventore',
    ];
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable->catalogId = 'aliquid';
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable->connectionName = 'laudantium';
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable->databaseName = 'est';
    $request->startDataQualityRulesetEvaluationRunRequest->dataSource->glueTable->tableName = 'dolor';
    $request->startDataQualityRulesetEvaluationRunRequest->numberOfWorkers = 400879;
    $request->startDataQualityRulesetEvaluationRunRequest->role = 'consectetur';
    $request->startDataQualityRulesetEvaluationRunRequest->rulesetNames = [
        'rem',
        'voluptatum',
        'ducimus',
        'adipisci',
    ];
    $request->startDataQualityRulesetEvaluationRunRequest->timeout = 927959;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'sequi';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = StartDataQualityRulesetEvaluationRunXAmzTargetEnum::AWS_GLUE_START_DATA_QUALITY_RULESET_EVALUATION_RUN;

    $response = $sdk->sdk->startDataQualityRulesetEvaluationRun($request);

    if ($response->startDataQualityRulesetEvaluationRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startExportLabelsTaskRun

Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartExportLabelsTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartExportLabelsTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartExportLabelsTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartExportLabelsTaskRunRequest();
    $request->startExportLabelsTaskRunRequest = new StartExportLabelsTaskRunRequest();
    $request->startExportLabelsTaskRunRequest->outputS3Path = 'veritatis';
    $request->startExportLabelsTaskRunRequest->transformId = 'tenetur';
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = StartExportLabelsTaskRunXAmzTargetEnum::AWS_GLUE_START_EXPORT_LABELS_TASK_RUN;

    $response = $sdk->sdk->startExportLabelsTaskRun($request);

    if ($response->startExportLabelsTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startImportLabelsTaskRun

<p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartImportLabelsTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartImportLabelsTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartImportLabelsTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartImportLabelsTaskRunRequest();
    $request->startImportLabelsTaskRunRequest = new StartImportLabelsTaskRunRequest();
    $request->startImportLabelsTaskRunRequest->inputS3Path = 'voluptas';
    $request->startImportLabelsTaskRunRequest->replaceAllLabels = false;
    $request->startImportLabelsTaskRunRequest->transformId = 'animi';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'aliquam';
    $request->xAmzTarget = StartImportLabelsTaskRunXAmzTargetEnum::AWS_GLUE_START_IMPORT_LABELS_TASK_RUN;

    $response = $sdk->sdk->startImportLabelsTaskRun($request);

    if ($response->startImportLabelsTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startJobRun

Starts a job run using a job definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartJobRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationProperty;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartJobRunRequest();
    $request->startJobRunRequest = new StartJobRunRequest();
    $request->startJobRunRequest->allocatedCapacity = 613702;
    $request->startJobRunRequest->arguments = [
        'eligendi' => 'placeat',
        'voluptas' => 'occaecati',
    ];
    $request->startJobRunRequest->executionClass = ExecutionClassEnum::STANDARD;
    $request->startJobRunRequest->jobName = 'illo';
    $request->startJobRunRequest->jobRunId = 'nihil';
    $request->startJobRunRequest->maxCapacity = 782.46;
    $request->startJobRunRequest->notificationProperty = new NotificationProperty();
    $request->startJobRunRequest->notificationProperty->notifyDelayAfter = 725316;
    $request->startJobRunRequest->numberOfWorkers = 371287;
    $request->startJobRunRequest->securityConfiguration = 'quasi';
    $request->startJobRunRequest->timeout = 766591;
    $request->startJobRunRequest->workerType = WorkerTypeEnum::STANDARD;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = StartJobRunXAmzTargetEnum::AWS_GLUE_START_JOB_RUN;

    $response = $sdk->sdk->startJobRun($request);

    if ($response->startJobRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMLEvaluationTaskRun

<p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMLEvaluationTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMLEvaluationTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartMLEvaluationTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMLEvaluationTaskRunRequest();
    $request->startMLEvaluationTaskRunRequest = new StartMLEvaluationTaskRunRequest();
    $request->startMLEvaluationTaskRunRequest->transformId = 'expedita';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = StartMLEvaluationTaskRunXAmzTargetEnum::AWS_GLUE_START_ML_EVALUATION_TASK_RUN;

    $response = $sdk->sdk->startMLEvaluationTaskRun($request);

    if ($response->startMLEvaluationTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startMLLabelingSetGenerationTaskRun

<p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartMLLabelingSetGenerationTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartMLLabelingSetGenerationTaskRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartMLLabelingSetGenerationTaskRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartMLLabelingSetGenerationTaskRunRequest();
    $request->startMLLabelingSetGenerationTaskRunRequest = new StartMLLabelingSetGenerationTaskRunRequest();
    $request->startMLLabelingSetGenerationTaskRunRequest->outputS3Path = 'quo';
    $request->startMLLabelingSetGenerationTaskRunRequest->transformId = 'incidunt';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = StartMLLabelingSetGenerationTaskRunXAmzTargetEnum::AWS_GLUE_START_ML_LABELING_SET_GENERATION_TASK_RUN;

    $response = $sdk->sdk->startMLLabelingSetGenerationTaskRun($request);

    if ($response->startMLLabelingSetGenerationTaskRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startTrigger

Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartTriggerRequest();
    $request->startTriggerRequest = new StartTriggerRequest();
    $request->startTriggerRequest->name = 'Cory Welch DDS';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzTarget = StartTriggerXAmzTargetEnum::AWS_GLUE_START_TRIGGER;

    $response = $sdk->sdk->startTrigger($request);

    if ($response->startTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startWorkflowRun

Starts a new run of the specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartWorkflowRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartWorkflowRunRequest();
    $request->startWorkflowRunRequest = new StartWorkflowRunRequest();
    $request->startWorkflowRunRequest->name = 'Tiffany Von';
    $request->startWorkflowRunRequest->runProperties = [
        'doloremque' => 'voluptatem',
        'eum' => 'at',
        'eum' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'voluptatum';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = StartWorkflowRunXAmzTargetEnum::AWS_GLUE_START_WORKFLOW_RUN;

    $response = $sdk->sdk->startWorkflowRun($request);

    if ($response->startWorkflowRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCrawler

If the specified crawler is running, stops the crawl.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCrawlerRequest();
    $request->stopCrawlerRequest = new StopCrawlerRequest();
    $request->stopCrawlerRequest->name = 'Kay Bradtke';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = StopCrawlerXAmzTargetEnum::AWS_GLUE_STOP_CRAWLER;

    $response = $sdk->sdk->stopCrawler($request);

    if ($response->stopCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCrawlerSchedule

Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopCrawlerScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCrawlerScheduleRequest();
    $request->stopCrawlerScheduleRequest = new StopCrawlerScheduleRequest();
    $request->stopCrawlerScheduleRequest->crawlerName = 'sapiente';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = StopCrawlerScheduleXAmzTargetEnum::AWS_GLUE_STOP_CRAWLER_SCHEDULE;

    $response = $sdk->sdk->stopCrawlerSchedule($request);

    if ($response->stopCrawlerScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopSession

Stops the session.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopSessionRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopSessionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopSessionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopSessionRequest();
    $request->stopSessionRequest = new StopSessionRequest();
    $request->stopSessionRequest->id = 'f2eac556-5d30-47cf-ae81-206e2813fa4a';
    $request->stopSessionRequest->requestOrigin = 'modi';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = StopSessionXAmzTargetEnum::AWS_GLUE_STOP_SESSION;

    $response = $sdk->sdk->stopSession($request);

    if ($response->stopSessionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopTrigger

Stops a specified trigger.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopTriggerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopTriggerRequest();
    $request->stopTriggerRequest = new StopTriggerRequest();
    $request->stopTriggerRequest->name = 'Bruce Block';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = StopTriggerXAmzTargetEnum::AWS_GLUE_STOP_TRIGGER;

    $response = $sdk->sdk->stopTrigger($request);

    if ($response->stopTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopWorkflowRun

Stops the execution of the specified workflow run.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopWorkflowRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopWorkflowRunXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopWorkflowRunRequest();
    $request->stopWorkflowRunRequest = new StopWorkflowRunRequest();
    $request->stopWorkflowRunRequest->name = 'Bill Bins';
    $request->stopWorkflowRunRequest->runId = 'numquam';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = StopWorkflowRunXAmzTargetEnum::AWS_GLUE_STOP_WORKFLOW_RUN;

    $response = $sdk->sdk->stopWorkflowRun($request);

    if ($response->stopWorkflowRunResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'hic';
    $request->tagResourceRequest->tagsToAdd = [
        'aliquid' => 'sed',
        'beatae' => 'similique',
        'ea' => 'animi',
    ];
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'laudantium';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_GLUE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'eveniet';
    $request->untagResourceRequest->tagsToRemove = [
        'velit',
        'officiis',
        'eius',
        'rerum',
    ];
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_GLUE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBlueprint

Updates a registered blueprint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBlueprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBlueprintXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBlueprintRequest();
    $request->updateBlueprintRequest = new UpdateBlueprintRequest();
    $request->updateBlueprintRequest->blueprintLocation = 'facilis';
    $request->updateBlueprintRequest->description = 'ipsum';
    $request->updateBlueprintRequest->name = 'Gail Braun';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'illo';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzTarget = UpdateBlueprintXAmzTargetEnum::AWS_GLUE_UPDATE_BLUEPRINT;

    $response = $sdk->sdk->updateBlueprint($request);

    if ($response->updateBlueprintResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateClassifier

Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCsvClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\CsvHeaderOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateGrokClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJsonClassifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateXMLClassifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateClassifierXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateClassifierRequest();
    $request->updateClassifierRequest = new UpdateClassifierRequest();
    $request->updateClassifierRequest->csvClassifier = new UpdateCsvClassifierRequest();
    $request->updateClassifierRequest->csvClassifier->allowSingleColumn = false;
    $request->updateClassifierRequest->csvClassifier->containsHeader = CsvHeaderOptionEnum::ABSENT;
    $request->updateClassifierRequest->csvClassifier->customDatatypeConfigured = false;
    $request->updateClassifierRequest->csvClassifier->customDatatypes = [
        'iusto',
        'enim',
        'accusamus',
    ];
    $request->updateClassifierRequest->csvClassifier->delimiter = 'aperiam';
    $request->updateClassifierRequest->csvClassifier->disableValueTrimming = false;
    $request->updateClassifierRequest->csvClassifier->header = [
        'laudantium',
        'tempora',
        'quae',
        'omnis',
    ];
    $request->updateClassifierRequest->csvClassifier->name = 'Wallace Wiegand';
    $request->updateClassifierRequest->csvClassifier->quoteSymbol = 'earum';
    $request->updateClassifierRequest->grokClassifier = new UpdateGrokClassifierRequest();
    $request->updateClassifierRequest->grokClassifier->classification = 'architecto';
    $request->updateClassifierRequest->grokClassifier->customPatterns = 'aliquam';
    $request->updateClassifierRequest->grokClassifier->grokPattern = 'labore';
    $request->updateClassifierRequest->grokClassifier->name = 'Ms. Jimmy Turcotte';
    $request->updateClassifierRequest->jsonClassifier = new UpdateJsonClassifierRequest();
    $request->updateClassifierRequest->jsonClassifier->jsonPath = 'facere';
    $request->updateClassifierRequest->jsonClassifier->name = 'Rodolfo Gutmann';
    $request->updateClassifierRequest->xmlClassifier = new UpdateXMLClassifierRequest();
    $request->updateClassifierRequest->xmlClassifier->classification = 'ad';
    $request->updateClassifierRequest->xmlClassifier->name = 'Jimmy Schaden';
    $request->updateClassifierRequest->xmlClassifier->rowTag = 'quibusdam';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'quia';
    $request->xAmzTarget = UpdateClassifierXAmzTargetEnum::AWS_GLUE_UPDATE_CLASSIFIER;

    $response = $sdk->sdk->updateClassifier($request);

    if ($response->updateClassifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateColumnStatisticsForPartition

<p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateColumnStatisticsForPartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatistics;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\BinaryColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\BooleanColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DateColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DecimalColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DecimalNumber;
use \OpenAPI\OpenAPI\Models\Shared\DoubleColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\LongColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\StringColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatisticsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnStatisticsForPartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateColumnStatisticsForPartitionRequest();
    $request->updateColumnStatisticsForPartitionRequest = new UpdateColumnStatisticsForPartitionRequest();
    $request->updateColumnStatisticsForPartitionRequest->catalogId = 'necessitatibus';
    $request->updateColumnStatisticsForPartitionRequest->columnStatisticsList = [
        new ColumnStatistics(),
    ];
    $request->updateColumnStatisticsForPartitionRequest->databaseName = 'ad';
    $request->updateColumnStatisticsForPartitionRequest->partitionValues = [
        'molestiae',
        'quia',
    ];
    $request->updateColumnStatisticsForPartitionRequest->tableName = 'laudantium';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = UpdateColumnStatisticsForPartitionXAmzTargetEnum::AWS_GLUE_UPDATE_COLUMN_STATISTICS_FOR_PARTITION;

    $response = $sdk->sdk->updateColumnStatisticsForPartition($request);

    if ($response->updateColumnStatisticsForPartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateColumnStatisticsForTable

<p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateColumnStatisticsForTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatistics;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\BinaryColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\BooleanColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DateColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DecimalColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\DecimalNumber;
use \OpenAPI\OpenAPI\Models\Shared\DoubleColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\LongColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\StringColumnStatisticsData;
use \OpenAPI\OpenAPI\Models\Shared\ColumnStatisticsTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateColumnStatisticsForTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateColumnStatisticsForTableRequest();
    $request->updateColumnStatisticsForTableRequest = new UpdateColumnStatisticsForTableRequest();
    $request->updateColumnStatisticsForTableRequest->catalogId = 'ipsa';
    $request->updateColumnStatisticsForTableRequest->columnStatisticsList = [
        new ColumnStatistics(),
        new ColumnStatistics(),
        new ColumnStatistics(),
    ];
    $request->updateColumnStatisticsForTableRequest->databaseName = 'dolore';
    $request->updateColumnStatisticsForTableRequest->tableName = 'esse';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateColumnStatisticsForTableXAmzTargetEnum::AWS_GLUE_UPDATE_COLUMN_STATISTICS_FOR_TABLE;

    $response = $sdk->sdk->updateColumnStatisticsForTable($request);

    if ($response->updateColumnStatisticsForTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnection

Updates a connection definition in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PhysicalConnectionRequirements;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionRequest();
    $request->updateConnectionRequest = new UpdateConnectionRequest();
    $request->updateConnectionRequest->catalogId = 'culpa';
    $request->updateConnectionRequest->connectionInput = new ConnectionInput();
    $request->updateConnectionRequest->connectionInput->connectionProperties = [
        'iusto' => 'quod',
        'voluptatibus' => 'voluptas',
        'non' => 'ullam',
    ];
    $request->updateConnectionRequest->connectionInput->connectionType = ConnectionTypeEnum::NETWORK;
    $request->updateConnectionRequest->connectionInput->description = 'voluptas';
    $request->updateConnectionRequest->connectionInput->matchCriteria = [
        'animi',
        'recusandae',
        'corporis',
        'non',
    ];
    $request->updateConnectionRequest->connectionInput->name = 'Preston Wyman DDS';
    $request->updateConnectionRequest->connectionInput->physicalConnectionRequirements = new PhysicalConnectionRequirements();
    $request->updateConnectionRequest->connectionInput->physicalConnectionRequirements->availabilityZone = 'sequi';
    $request->updateConnectionRequest->connectionInput->physicalConnectionRequirements->securityGroupIdList = [
        'vitae',
    ];
    $request->updateConnectionRequest->connectionInput->physicalConnectionRequirements->subnetId = 'voluptatibus';
    $request->updateConnectionRequest->name = 'Tammy Farrell';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = UpdateConnectionXAmzTargetEnum::AWS_GLUE_UPDATE_CONNECTION;

    $response = $sdk->sdk->updateConnection($request);

    if ($response->updateConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCrawler

Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCrawlerRequest;
use \OpenAPI\OpenAPI\Models\Shared\LakeFormationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LineageConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CrawlerLineageSettingsEnum;
use \OpenAPI\OpenAPI\Models\Shared\RecrawlPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RecrawlBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\CrawlerTargets;
use \OpenAPI\OpenAPI\Models\Shared\CatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTarget;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBTarget;
use \OpenAPI\OpenAPI\Models\Shared\JdbcTarget;
use \OpenAPI\OpenAPI\Models\Shared\JdbcMetadataEntryEnum;
use \OpenAPI\OpenAPI\Models\Shared\MongoDBTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3Target;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrawlerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCrawlerRequest();
    $request->updateCrawlerRequest = new UpdateCrawlerRequest();
    $request->updateCrawlerRequest->classifiers = [
        'vitae',
        'est',
        'accusantium',
        'quod',
    ];
    $request->updateCrawlerRequest->configuration = 'minus';
    $request->updateCrawlerRequest->crawlerSecurityConfiguration = 'quos';
    $request->updateCrawlerRequest->databaseName = 'possimus';
    $request->updateCrawlerRequest->description = 'maiores';
    $request->updateCrawlerRequest->lakeFormationConfiguration = new LakeFormationConfiguration();
    $request->updateCrawlerRequest->lakeFormationConfiguration->accountId = 'odio';
    $request->updateCrawlerRequest->lakeFormationConfiguration->useLakeFormationCredentials = false;
    $request->updateCrawlerRequest->lineageConfiguration = new LineageConfiguration();
    $request->updateCrawlerRequest->lineageConfiguration->crawlerLineageSettings = CrawlerLineageSettingsEnum::DISABLE;
    $request->updateCrawlerRequest->name = 'Kevin Murazik';
    $request->updateCrawlerRequest->recrawlPolicy = new RecrawlPolicy();
    $request->updateCrawlerRequest->recrawlPolicy->recrawlBehavior = RecrawlBehaviorEnum::CRAWL_NEW_FOLDERS_ONLY;
    $request->updateCrawlerRequest->role = 'repellendus';
    $request->updateCrawlerRequest->schedule = 'unde';
    $request->updateCrawlerRequest->schemaChangePolicy = new SchemaChangePolicy();
    $request->updateCrawlerRequest->schemaChangePolicy->deleteBehavior = DeleteBehaviorEnum::LOG;
    $request->updateCrawlerRequest->schemaChangePolicy->updateBehavior = UpdateBehaviorEnum::UPDATE_IN_DATABASE;
    $request->updateCrawlerRequest->tablePrefix = 'sequi';
    $request->updateCrawlerRequest->targets = new CrawlerTargets();
    $request->updateCrawlerRequest->targets->catalogTargets = [
        new CatalogTarget(),
        new CatalogTarget(),
    ];
    $request->updateCrawlerRequest->targets->deltaTargets = [
        new DeltaTarget(),
        new DeltaTarget(),
    ];
    $request->updateCrawlerRequest->targets->dynamoDBTargets = [
        new DynamoDBTarget(),
        new DynamoDBTarget(),
        new DynamoDBTarget(),
    ];
    $request->updateCrawlerRequest->targets->jdbcTargets = [
        new JdbcTarget(),
        new JdbcTarget(),
    ];
    $request->updateCrawlerRequest->targets->mongoDBTargets = [
        new MongoDBTarget(),
        new MongoDBTarget(),
        new MongoDBTarget(),
        new MongoDBTarget(),
    ];
    $request->updateCrawlerRequest->targets->s3Targets = [
        new S3Target(),
    ];
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = UpdateCrawlerXAmzTargetEnum::AWS_GLUE_UPDATE_CRAWLER;

    $response = $sdk->sdk->updateCrawler($request);

    if ($response->updateCrawlerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCrawlerSchedule

Updates the schedule of a crawler using a <code>cron</code> expression. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCrawlerScheduleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrawlerScheduleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCrawlerScheduleRequest();
    $request->updateCrawlerScheduleRequest = new UpdateCrawlerScheduleRequest();
    $request->updateCrawlerScheduleRequest->crawlerName = 'et';
    $request->updateCrawlerScheduleRequest->schedule = 'quas';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'eveniet';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = UpdateCrawlerScheduleXAmzTargetEnum::AWS_GLUE_UPDATE_CRAWLER_SCHEDULE;

    $response = $sdk->sdk->updateCrawlerSchedule($request);

    if ($response->updateCrawlerScheduleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDataQualityRuleset

Updates the specified data quality ruleset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDataQualityRulesetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDataQualityRulesetXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDataQualityRulesetRequest();
    $request->updateDataQualityRulesetRequest = new UpdateDataQualityRulesetRequest();
    $request->updateDataQualityRulesetRequest->description = 'sed';
    $request->updateDataQualityRulesetRequest->name = 'Willard Rutherford';
    $request->updateDataQualityRulesetRequest->ruleset = 'recusandae';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = UpdateDataQualityRulesetXAmzTargetEnum::AWS_GLUE_UPDATE_DATA_QUALITY_RULESET;

    $response = $sdk->sdk->updateDataQualityRuleset($request);

    if ($response->updateDataQualityRulesetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDatabase

Updates an existing database definition in a Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDatabaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalPermissions;
use \OpenAPI\OpenAPI\Models\Shared\PermissionEnum;
use \OpenAPI\OpenAPI\Models\Shared\DataLakePrincipal;
use \OpenAPI\OpenAPI\Models\Shared\FederatedDatabase;
use \OpenAPI\OpenAPI\Models\Shared\DatabaseIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDatabaseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDatabaseRequest();
    $request->updateDatabaseRequest = new UpdateDatabaseRequest();
    $request->updateDatabaseRequest->catalogId = 'illo';
    $request->updateDatabaseRequest->databaseInput = new DatabaseInput();
    $request->updateDatabaseRequest->databaseInput->createTableDefaultPermissions = [
        new PrincipalPermissions(),
        new PrincipalPermissions(),
        new PrincipalPermissions(),
        new PrincipalPermissions(),
    ];
    $request->updateDatabaseRequest->databaseInput->description = 'dignissimos';
    $request->updateDatabaseRequest->databaseInput->federatedDatabase = new FederatedDatabase();
    $request->updateDatabaseRequest->databaseInput->federatedDatabase->connectionName = 'minus';
    $request->updateDatabaseRequest->databaseInput->federatedDatabase->identifier = 'distinctio';
    $request->updateDatabaseRequest->databaseInput->locationUri = 'possimus';
    $request->updateDatabaseRequest->databaseInput->name = 'Sam Ullrich';
    $request->updateDatabaseRequest->databaseInput->parameters = [
        'quaerat' => 'ipsum',
        'ducimus' => 'laudantium',
    ];
    $request->updateDatabaseRequest->databaseInput->targetDatabase = new DatabaseIdentifier();
    $request->updateDatabaseRequest->databaseInput->targetDatabase->catalogId = 'rerum';
    $request->updateDatabaseRequest->databaseInput->targetDatabase->databaseName = 'deserunt';
    $request->updateDatabaseRequest->name = 'Ms. Erin Dickinson';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'illo';
    $request->xAmzSignedHeaders = 'exercitationem';
    $request->xAmzTarget = UpdateDatabaseXAmzTargetEnum::AWS_GLUE_UPDATE_DATABASE;

    $response = $sdk->sdk->updateDatabase($request);

    if ($response->updateDatabaseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDevEndpoint

Updates a specified development endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDevEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DevEndpointCustomLibraries;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDevEndpointRequest();
    $request->updateDevEndpointRequest = new UpdateDevEndpointRequest();
    $request->updateDevEndpointRequest->addArguments = [
        'illum' => 'fugit',
        'maxime' => 'dolorum',
        'repellat' => 'nostrum',
    ];
    $request->updateDevEndpointRequest->addPublicKeys = [
        'quibusdam',
        'commodi',
        'esse',
        'explicabo',
    ];
    $request->updateDevEndpointRequest->customLibraries = new DevEndpointCustomLibraries();
    $request->updateDevEndpointRequest->customLibraries->extraJarsS3Path = 'consectetur';
    $request->updateDevEndpointRequest->customLibraries->extraPythonLibsS3Path = 'temporibus';
    $request->updateDevEndpointRequest->deleteArguments = [
        'ipsa',
        'maiores',
        'exercitationem',
        'culpa',
    ];
    $request->updateDevEndpointRequest->deletePublicKeys = [
        'aspernatur',
        'sapiente',
        'neque',
        'officia',
    ];
    $request->updateDevEndpointRequest->endpointName = 'suscipit';
    $request->updateDevEndpointRequest->publicKey = 'harum';
    $request->updateDevEndpointRequest->updateEtlLibraries = false;
    $request->xAmzAlgorithm = 'ducimus';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'laudantium';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = UpdateDevEndpointXAmzTargetEnum::AWS_GLUE_UPDATE_DEV_ENDPOINT;

    $response = $sdk->sdk->updateDevEndpoint($request);

    if ($response->updateDevEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJob

Updates an existing job definition. The previous job definition is completely overwritten by this information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\JobUpdate;
use \OpenAPI\OpenAPI\Models\Shared\CodeGenConfigurationNode;
use \OpenAPI\OpenAPI\Models\Shared\Aggregate;
use \OpenAPI\OpenAPI\Models\Shared\AggregateOperation;
use \OpenAPI\OpenAPI\Models\Shared\AggFunctionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApplyMapping;
use \OpenAPI\OpenAPI\Models\Shared\Mapping;
use \OpenAPI\OpenAPI\Models\Shared\AthenaConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\GlueSchema;
use \OpenAPI\OpenAPI\Models\Shared\GlueStudioSchemaColumn;
use \OpenAPI\OpenAPI\Models\Shared\CatalogDeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\CatalogHudiSource;
use \OpenAPI\OpenAPI\Models\Shared\CatalogKafkaSource;
use \OpenAPI\OpenAPI\Models\Shared\StreamingDataPreviewOptions;
use \OpenAPI\OpenAPI\Models\Shared\KafkaStreamingSourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\CatalogKinesisSource;
use \OpenAPI\OpenAPI\Models\Shared\KinesisStreamingSourceOptions;
use \OpenAPI\OpenAPI\Models\Shared\StartingPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\BasicCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\CustomCode;
use \OpenAPI\OpenAPI\Models\Shared\DirectJDBCSource;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectKafkaSource;
use \OpenAPI\OpenAPI\Models\Shared\DirectKinesisSource;
use \OpenAPI\OpenAPI\Models\Shared\DropDuplicates;
use \OpenAPI\OpenAPI\Models\Shared\DropFields;
use \OpenAPI\OpenAPI\Models\Shared\DropNullFields;
use \OpenAPI\OpenAPI\Models\Shared\NullCheckBoxList;
use \OpenAPI\OpenAPI\Models\Shared\NullValueField;
use \OpenAPI\OpenAPI\Models\Shared\Datatype;
use \OpenAPI\OpenAPI\Models\Shared\DynamicTransform;
use \OpenAPI\OpenAPI\Models\Shared\TransformConfigParameter;
use \OpenAPI\OpenAPI\Models\Shared\ParamTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamoDBCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\EvaluateDataQuality;
use \OpenAPI\OpenAPI\Models\Shared\DQTransformOutputEnum;
use \OpenAPI\OpenAPI\Models\Shared\DQResultsPublishingOptions;
use \OpenAPI\OpenAPI\Models\Shared\DQStopJobOnFailureOptions;
use \OpenAPI\OpenAPI\Models\Shared\DQStopJobOnFailureTimingEnum;
use \OpenAPI\OpenAPI\Models\Shared\FillMissingValues;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\FilterExpression;
use \OpenAPI\OpenAPI\Models\Shared\FilterOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterValue;
use \OpenAPI\OpenAPI\Models\Shared\FilterValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FilterLogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GovernedCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\S3SourceAdditionalOptions;
use \OpenAPI\OpenAPI\Models\Shared\GovernedCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\CatalogSchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCatalogBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorOptions;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecordTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JDBCConnectorTarget;
use \OpenAPI\OpenAPI\Models\Shared\Join;
use \OpenAPI\OpenAPI\Models\Shared\JoinColumn;
use \OpenAPI\OpenAPI\Models\Shared\JoinTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Merge;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\MicrosoftSQLServerCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\MySQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\MySQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\OracleSQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\OracleSQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\PIIDetection;
use \OpenAPI\OpenAPI\Models\Shared\PiiTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\PostgreSQLCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftSource;
use \OpenAPI\OpenAPI\Models\Shared\RedshiftTarget;
use \OpenAPI\OpenAPI\Models\Shared\UpsertRedshiftTargetOptions;
use \OpenAPI\OpenAPI\Models\Shared\RelationalCatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\RenameField;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogDeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogHudiSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogSource;
use \OpenAPI\OpenAPI\Models\Shared\S3CatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3CsvSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DirectSourceAdditionalOptions;
use \OpenAPI\OpenAPI\Models\Shared\CompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\QuoteCharEnum;
use \OpenAPI\OpenAPI\Models\Shared\SeparatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaDirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\DeltaTargetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\DirectSchemaChangePolicy;
use \OpenAPI\OpenAPI\Models\Shared\S3DeltaSource;
use \OpenAPI\OpenAPI\Models\Shared\S3DirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3GlueParquetTarget;
use \OpenAPI\OpenAPI\Models\Shared\ParquetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiCatalogTarget;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiDirectTarget;
use \OpenAPI\OpenAPI\Models\Shared\HudiTargetCompressionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3HudiSource;
use \OpenAPI\OpenAPI\Models\Shared\S3JsonSource;
use \OpenAPI\OpenAPI\Models\Shared\S3ParquetSource;
use \OpenAPI\OpenAPI\Models\Shared\SelectFields;
use \OpenAPI\OpenAPI\Models\Shared\SelectFromCollection;
use \OpenAPI\OpenAPI\Models\Shared\SparkConnectorSource;
use \OpenAPI\OpenAPI\Models\Shared\SparkConnectorTarget;
use \OpenAPI\OpenAPI\Models\Shared\SparkSQL;
use \OpenAPI\OpenAPI\Models\Shared\SqlAlias;
use \OpenAPI\OpenAPI\Models\Shared\Spigot;
use \OpenAPI\OpenAPI\Models\Shared\SplitFields;
use \OpenAPI\OpenAPI\Models\Shared\Union;
use \OpenAPI\OpenAPI\Models\Shared\UnionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobCommand;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionsList;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\ExecutionProperty;
use \OpenAPI\OpenAPI\Models\Shared\NotificationProperty;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlDetails;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlAuthStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlProviderEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobRequest();
    $request->updateJobRequest = new UpdateJobRequest();
    $request->updateJobRequest->jobName = 'quis';
    $request->updateJobRequest->jobUpdate = new JobUpdate();
    $request->updateJobRequest->jobUpdate->allocatedCapacity = 435883;
    $request->updateJobRequest->jobUpdate->codeGenConfigurationNodes = [
        'quaerat' => new CodeGenConfigurationNode(),
    ];
    $request->updateJobRequest->jobUpdate->command = new JobCommand();
    $request->updateJobRequest->jobUpdate->command->name = 'Jeannie Herzog';
    $request->updateJobRequest->jobUpdate->command->pythonVersion = 'quisquam';
    $request->updateJobRequest->jobUpdate->command->scriptLocation = 'provident';
    $request->updateJobRequest->jobUpdate->connections = new ConnectionsList();
    $request->updateJobRequest->jobUpdate->connections->connections = [
        'nam',
        'nemo',
        'enim',
    ];
    $request->updateJobRequest->jobUpdate->defaultArguments = [
        'minima' => 'tempora',
        'perferendis' => 'corrupti',
    ];
    $request->updateJobRequest->jobUpdate->description = 'doloremque';
    $request->updateJobRequest->jobUpdate->executionClass = ExecutionClassEnum::STANDARD;
    $request->updateJobRequest->jobUpdate->executionProperty = new ExecutionProperty();
    $request->updateJobRequest->jobUpdate->executionProperty->maxConcurrentRuns = 257821;
    $request->updateJobRequest->jobUpdate->glueVersion = 'doloremque';
    $request->updateJobRequest->jobUpdate->logUri = 'cum';
    $request->updateJobRequest->jobUpdate->maxCapacity = 7512.98;
    $request->updateJobRequest->jobUpdate->maxRetries = 628314;
    $request->updateJobRequest->jobUpdate->nonOverridableArguments = [
        'impedit' => 'nisi',
        'cumque' => 'soluta',
        'fugiat' => 'laboriosam',
        'nam' => 'enim',
    ];
    $request->updateJobRequest->jobUpdate->notificationProperty = new NotificationProperty();
    $request->updateJobRequest->jobUpdate->notificationProperty->notifyDelayAfter = 979011;
    $request->updateJobRequest->jobUpdate->numberOfWorkers = 235482;
    $request->updateJobRequest->jobUpdate->role = 'necessitatibus';
    $request->updateJobRequest->jobUpdate->securityConfiguration = 'maxime';
    $request->updateJobRequest->jobUpdate->sourceControlDetails = new SourceControlDetails();
    $request->updateJobRequest->jobUpdate->sourceControlDetails->authStrategy = SourceControlAuthStrategyEnum::AWS_SECRETS_MANAGER;
    $request->updateJobRequest->jobUpdate->sourceControlDetails->authToken = 'voluptatem';
    $request->updateJobRequest->jobUpdate->sourceControlDetails->branch = 'provident';
    $request->updateJobRequest->jobUpdate->sourceControlDetails->folder = 'adipisci';
    $request->updateJobRequest->jobUpdate->sourceControlDetails->lastCommitId = 'accusantium';
    $request->updateJobRequest->jobUpdate->sourceControlDetails->owner = 'magnam';
    $request->updateJobRequest->jobUpdate->sourceControlDetails->provider = SourceControlProviderEnum::AWS_CODE_COMMIT;
    $request->updateJobRequest->jobUpdate->sourceControlDetails->repository = 'omnis';
    $request->updateJobRequest->jobUpdate->timeout = 131576;
    $request->updateJobRequest->jobUpdate->workerType = WorkerTypeEnum::G1_X;
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = UpdateJobXAmzTargetEnum::AWS_GLUE_UPDATE_JOB;

    $response = $sdk->sdk->updateJob($request);

    if ($response->updateJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateJobFromSourceControl

<p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p> <p>This API supports optional parameters which take in the repository information.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobFromSourceControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateJobFromSourceControlRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlAuthStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateJobFromSourceControlXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateJobFromSourceControlRequest();
    $request->updateJobFromSourceControlRequest = new UpdateJobFromSourceControlRequest();
    $request->updateJobFromSourceControlRequest->authStrategy = SourceControlAuthStrategyEnum::AWS_SECRETS_MANAGER;
    $request->updateJobFromSourceControlRequest->authToken = 'quasi';
    $request->updateJobFromSourceControlRequest->branchName = 'error';
    $request->updateJobFromSourceControlRequest->commitId = 'nobis';
    $request->updateJobFromSourceControlRequest->folder = 'tempora';
    $request->updateJobFromSourceControlRequest->jobName = 'voluptate';
    $request->updateJobFromSourceControlRequest->provider = SourceControlProviderEnum::GITHUB;
    $request->updateJobFromSourceControlRequest->repositoryName = 'expedita';
    $request->updateJobFromSourceControlRequest->repositoryOwner = 'aperiam';
    $request->xAmzAlgorithm = 'voluptates';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = UpdateJobFromSourceControlXAmzTargetEnum::AWS_GLUE_UPDATE_JOB_FROM_SOURCE_CONTROL;

    $response = $sdk->sdk->updateJobFromSourceControl($request);

    if ($response->updateJobFromSourceControlResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMLTransform

<p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMLTransformRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransformParameters;
use \OpenAPI\OpenAPI\Models\Shared\FindMatchesParameters;
use \OpenAPI\OpenAPI\Models\Shared\TransformTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMLTransformXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMLTransformRequest();
    $request->updateMLTransformRequest = new UpdateMLTransformRequest();
    $request->updateMLTransformRequest->description = 'eos';
    $request->updateMLTransformRequest->glueVersion = 'aliquam';
    $request->updateMLTransformRequest->maxCapacity = 5017.68;
    $request->updateMLTransformRequest->maxRetries = 943063;
    $request->updateMLTransformRequest->name = 'Emmett Jones';
    $request->updateMLTransformRequest->numberOfWorkers = 656839;
    $request->updateMLTransformRequest->parameters = new TransformParameters();
    $request->updateMLTransformRequest->parameters->findMatchesParameters = new FindMatchesParameters();
    $request->updateMLTransformRequest->parameters->findMatchesParameters->accuracyCostTradeoff = 5911.71;
    $request->updateMLTransformRequest->parameters->findMatchesParameters->enforceProvidedLabels = false;
    $request->updateMLTransformRequest->parameters->findMatchesParameters->precisionRecallTradeoff = 1064.95;
    $request->updateMLTransformRequest->parameters->findMatchesParameters->primaryKeyColumnName = 'ipsa';
    $request->updateMLTransformRequest->parameters->transformType = TransformTypeEnum::FIND_MATCHES;
    $request->updateMLTransformRequest->role = 'mollitia';
    $request->updateMLTransformRequest->timeout = 721138;
    $request->updateMLTransformRequest->transformId = 'assumenda';
    $request->updateMLTransformRequest->workerType = WorkerTypeEnum::G025_X;
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = UpdateMLTransformXAmzTargetEnum::AWS_GLUE_UPDATE_ML_TRANSFORM;

    $response = $sdk->sdk->updateMLTransform($request);

    if ($response->updateMLTransformResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePartition

Updates a partition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePartitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartitionInput;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePartitionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePartitionRequest();
    $request->updatePartitionRequest = new UpdatePartitionRequest();
    $request->updatePartitionRequest->catalogId = 'aliquid';
    $request->updatePartitionRequest->databaseName = 'provident';
    $request->updatePartitionRequest->partitionInput = new PartitionInput();
    $request->updatePartitionRequest->partitionInput->lastAccessTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-13T05:28:14.380Z');
    $request->updatePartitionRequest->partitionInput->lastAnalyzedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-26T21:22:49.757Z');
    $request->updatePartitionRequest->partitionInput->parameters = [
        'eaque' => 'alias',
        'qui' => 'consequuntur',
        'vitae' => 'quidem',
        'sequi' => 'amet',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor = new StorageDescriptor();
    $request->updatePartitionRequest->partitionInput->storageDescriptor->additionalLocations = [
        'illum',
        'praesentium',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->bucketColumns = [
        'similique',
        'eligendi',
        'tempore',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->columns = [
        new Column(),
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->compressed = false;
    $request->updatePartitionRequest->partitionInput->storageDescriptor->inputFormat = 'debitis';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->location = 'nobis';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->numberOfBuckets = 989089;
    $request->updatePartitionRequest->partitionInput->storageDescriptor->outputFormat = 'temporibus';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->parameters = [
        'atque' => 'quibusdam',
        'sit' => 'quo',
        'veniam' => 'aliquam',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference = new SchemaReference();
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId = new SchemaId();
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->registryName = 'provident';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->schemaArn = 'vero';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaId->schemaName = 'earum';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaVersionId = 'doloremque';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->schemaReference->schemaVersionNumber = 217504;
    $request->updatePartitionRequest->partitionInput->storageDescriptor->serdeInfo = new SerDeInfo();
    $request->updatePartitionRequest->partitionInput->storageDescriptor->serdeInfo->name = 'Laura Goodwin';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->serdeInfo->parameters = [
        'officia' => 'ex',
        'architecto' => 'a',
        'laborum' => 'veritatis',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->serdeInfo->serializationLibrary = 'quod';
    $request->updatePartitionRequest->partitionInput->storageDescriptor->skewedInfo = new SkewedInfo();
    $request->updatePartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnNames = [
        'qui',
        'accusantium',
        'commodi',
        'atque',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnValueLocationMaps = [
        'tenetur' => 'voluptate',
        'quam' => 'quod',
        'vitae' => 'sapiente',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->skewedInfo->skewedColumnValues = [
        'quod',
        'voluptate',
        'inventore',
        'facere',
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->sortColumns = [
        new Order(),
        new Order(),
        new Order(),
        new Order(),
    ];
    $request->updatePartitionRequest->partitionInput->storageDescriptor->storedAsSubDirectories = false;
    $request->updatePartitionRequest->partitionInput->values = [
        'ab',
        'ex',
        'consectetur',
    ];
    $request->updatePartitionRequest->partitionValueList = [
        'sed',
        'animi',
        'sequi',
        'eligendi',
    ];
    $request->updatePartitionRequest->tableName = 'voluptatum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = UpdatePartitionXAmzTargetEnum::AWS_GLUE_UPDATE_PARTITION;

    $response = $sdk->sdk->updatePartition($request);

    if ($response->updatePartitionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRegistry

Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRegistryRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRegistryInput;
use \OpenAPI\OpenAPI\Models\Shared\RegistryId;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRegistryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRegistryRequest();
    $request->updateRegistryInput = new UpdateRegistryInput();
    $request->updateRegistryInput->description = 'adipisci';
    $request->updateRegistryInput->registryId = new RegistryId();
    $request->updateRegistryInput->registryId->registryArn = 'non';
    $request->updateRegistryInput->registryId->registryName = 'optio';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = UpdateRegistryXAmzTargetEnum::AWS_GLUE_UPDATE_REGISTRY;

    $response = $sdk->sdk->updateRegistry($request);

    if ($response->updateRegistryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSchema

<p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSchemaInput;
use \OpenAPI\OpenAPI\Models\Shared\CompatibilityEnum;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SchemaVersionNumber;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSchemaRequest();
    $request->updateSchemaInput = new UpdateSchemaInput();
    $request->updateSchemaInput->compatibility = CompatibilityEnum::FORWARD;
    $request->updateSchemaInput->description = 'voluptates';
    $request->updateSchemaInput->schemaId = new SchemaId();
    $request->updateSchemaInput->schemaId->registryName = 'eum';
    $request->updateSchemaInput->schemaId->schemaArn = 'quasi';
    $request->updateSchemaInput->schemaId->schemaName = 'quas';
    $request->updateSchemaInput->schemaVersionNumber = new SchemaVersionNumber();
    $request->updateSchemaInput->schemaVersionNumber->latestVersion = false;
    $request->updateSchemaInput->schemaVersionNumber->versionNumber = 484942;
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = UpdateSchemaXAmzTargetEnum::AWS_GLUE_UPDATE_SCHEMA;

    $response = $sdk->sdk->updateSchema($request);

    if ($response->updateSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSourceControlFromJob

<p>Synchronizes a job to the source control repository. This operation takes the job artifacts from the Glue internal stores and makes a commit to the remote repository that is configured on the job.</p> <p>This API supports optional parameters which take in the repository information.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceControlFromJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSourceControlFromJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlAuthStrategyEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceControlProviderEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSourceControlFromJobXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSourceControlFromJobRequest();
    $request->updateSourceControlFromJobRequest = new UpdateSourceControlFromJobRequest();
    $request->updateSourceControlFromJobRequest->authStrategy = SourceControlAuthStrategyEnum::AWS_SECRETS_MANAGER;
    $request->updateSourceControlFromJobRequest->authToken = 'magni';
    $request->updateSourceControlFromJobRequest->branchName = 'natus';
    $request->updateSourceControlFromJobRequest->commitId = 'illum';
    $request->updateSourceControlFromJobRequest->folder = 'a';
    $request->updateSourceControlFromJobRequest->jobName = 'impedit';
    $request->updateSourceControlFromJobRequest->provider = SourceControlProviderEnum::AWS_CODE_COMMIT;
    $request->updateSourceControlFromJobRequest->repositoryName = 'ut';
    $request->updateSourceControlFromJobRequest->repositoryOwner = 'facere';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = UpdateSourceControlFromJobXAmzTargetEnum::AWS_GLUE_UPDATE_SOURCE_CONTROL_FROM_JOB;

    $response = $sdk->sdk->updateSourceControlFromJob($request);

    if ($response->updateSourceControlFromJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTable

Updates a metadata table in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTableRequest;
use \OpenAPI\OpenAPI\Models\Shared\TableInput;
use \OpenAPI\OpenAPI\Models\Shared\Column;
use \OpenAPI\OpenAPI\Models\Shared\StorageDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\SchemaReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaId;
use \OpenAPI\OpenAPI\Models\Shared\SerDeInfo;
use \OpenAPI\OpenAPI\Models\Shared\SkewedInfo;
use \OpenAPI\OpenAPI\Models\Shared\Order;
use \OpenAPI\OpenAPI\Models\Shared\TableIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTableXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTableRequest();
    $request->updateTableRequest = new UpdateTableRequest();
    $request->updateTableRequest->catalogId = 'provident';
    $request->updateTableRequest->databaseName = 'dolor';
    $request->updateTableRequest->skipArchive = false;
    $request->updateTableRequest->tableInput = new TableInput();
    $request->updateTableRequest->tableInput->description = 'sint';
    $request->updateTableRequest->tableInput->lastAccessTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-13T22:45:33.763Z');
    $request->updateTableRequest->tableInput->lastAnalyzedTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-13T08:50:44.710Z');
    $request->updateTableRequest->tableInput->name = 'Ben Shields';
    $request->updateTableRequest->tableInput->owner = 'doloremque';
    $request->updateTableRequest->tableInput->parameters = [
        'alias' => 'velit',
    ];
    $request->updateTableRequest->tableInput->partitionKeys = [
        new Column(),
        new Column(),
    ];
    $request->updateTableRequest->tableInput->retention = 339094;
    $request->updateTableRequest->tableInput->storageDescriptor = new StorageDescriptor();
    $request->updateTableRequest->tableInput->storageDescriptor->additionalLocations = [
        'ratione',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->bucketColumns = [
        'maxime',
        'recusandae',
        'cumque',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->columns = [
        new Column(),
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->compressed = false;
    $request->updateTableRequest->tableInput->storageDescriptor->inputFormat = 'totam';
    $request->updateTableRequest->tableInput->storageDescriptor->location = 'iure';
    $request->updateTableRequest->tableInput->storageDescriptor->numberOfBuckets = 982927;
    $request->updateTableRequest->tableInput->storageDescriptor->outputFormat = 'est';
    $request->updateTableRequest->tableInput->storageDescriptor->parameters = [
        'veritatis' => 'necessitatibus',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference = new SchemaReference();
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaId = new SchemaId();
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->registryName = 'iste';
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->schemaArn = 'dicta';
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaId->schemaName = 'ipsam';
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaVersionId = 'consequuntur';
    $request->updateTableRequest->tableInput->storageDescriptor->schemaReference->schemaVersionNumber = 765271;
    $request->updateTableRequest->tableInput->storageDescriptor->serdeInfo = new SerDeInfo();
    $request->updateTableRequest->tableInput->storageDescriptor->serdeInfo->name = 'Ms. Melvin Brekke III';
    $request->updateTableRequest->tableInput->storageDescriptor->serdeInfo->parameters = [
        'libero' => 'molestias',
        'necessitatibus' => 'ipsum',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->serdeInfo->serializationLibrary = 'impedit';
    $request->updateTableRequest->tableInput->storageDescriptor->skewedInfo = new SkewedInfo();
    $request->updateTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnNames = [
        'illum',
        'distinctio',
        'voluptatem',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnValueLocationMaps = [
        'quaerat' => 'consequatur',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->skewedInfo->skewedColumnValues = [
        'repellendus',
        'commodi',
        'quibusdam',
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->sortColumns = [
        new Order(),
    ];
    $request->updateTableRequest->tableInput->storageDescriptor->storedAsSubDirectories = false;
    $request->updateTableRequest->tableInput->tableType = 'voluptas';
    $request->updateTableRequest->tableInput->targetTable = new TableIdentifier();
    $request->updateTableRequest->tableInput->targetTable->catalogId = 'quaerat';
    $request->updateTableRequest->tableInput->targetTable->databaseName = 'earum';
    $request->updateTableRequest->tableInput->targetTable->name = 'Kristopher Grimes';
    $request->updateTableRequest->tableInput->viewExpandedText = 'perspiciatis';
    $request->updateTableRequest->tableInput->viewOriginalText = 'alias';
    $request->updateTableRequest->transactionId = 'ex';
    $request->updateTableRequest->versionId = 'quibusdam';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'neque';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = UpdateTableXAmzTargetEnum::AWS_GLUE_UPDATE_TABLE;

    $response = $sdk->sdk->updateTable($request);

    if ($response->updateTableResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrigger

Updates a trigger definition.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTriggerRequest;
use \OpenAPI\OpenAPI\Models\Shared\TriggerUpdate;
use \OpenAPI\OpenAPI\Models\Shared\Action;
use \OpenAPI\OpenAPI\Models\Shared\NotificationProperty;
use \OpenAPI\OpenAPI\Models\Shared\EventBatchingCondition;
use \OpenAPI\OpenAPI\Models\Shared\Predicate;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\CrawlStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogicalOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogicalEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTriggerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTriggerRequest();
    $request->updateTriggerRequest = new UpdateTriggerRequest();
    $request->updateTriggerRequest->name = 'Alejandro DuBuque';
    $request->updateTriggerRequest->triggerUpdate = new TriggerUpdate();
    $request->updateTriggerRequest->triggerUpdate->actions = [
        new Action(),
    ];
    $request->updateTriggerRequest->triggerUpdate->description = 'placeat';
    $request->updateTriggerRequest->triggerUpdate->eventBatchingCondition = new EventBatchingCondition();
    $request->updateTriggerRequest->triggerUpdate->eventBatchingCondition->batchSize = 570039;
    $request->updateTriggerRequest->triggerUpdate->eventBatchingCondition->batchWindow = 927021;
    $request->updateTriggerRequest->triggerUpdate->name = 'Gerald Will DDS';
    $request->updateTriggerRequest->triggerUpdate->predicate = new Predicate();
    $request->updateTriggerRequest->triggerUpdate->predicate->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->updateTriggerRequest->triggerUpdate->predicate->logical = LogicalEnum::AND;
    $request->updateTriggerRequest->triggerUpdate->schedule = 'recusandae';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = UpdateTriggerXAmzTargetEnum::AWS_GLUE_UPDATE_TRIGGER;

    $response = $sdk->sdk->updateTrigger($request);

    if ($response->updateTriggerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserDefinedFunction

Updates an existing function definition in the Data Catalog.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserDefinedFunctionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UserDefinedFunctionInput;
use \OpenAPI\OpenAPI\Models\Shared\PrincipalTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceUri;
use \OpenAPI\OpenAPI\Models\Shared\ResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserDefinedFunctionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserDefinedFunctionRequest();
    $request->updateUserDefinedFunctionRequest = new UpdateUserDefinedFunctionRequest();
    $request->updateUserDefinedFunctionRequest->catalogId = 'magni';
    $request->updateUserDefinedFunctionRequest->databaseName = 'beatae';
    $request->updateUserDefinedFunctionRequest->functionInput = new UserDefinedFunctionInput();
    $request->updateUserDefinedFunctionRequest->functionInput->className = 'aliquid';
    $request->updateUserDefinedFunctionRequest->functionInput->functionName = 'ad';
    $request->updateUserDefinedFunctionRequest->functionInput->ownerName = 'voluptate';
    $request->updateUserDefinedFunctionRequest->functionInput->ownerType = PrincipalTypeEnum::ROLE;
    $request->updateUserDefinedFunctionRequest->functionInput->resourceUris = [
        new ResourceUri(),
        new ResourceUri(),
    ];
    $request->updateUserDefinedFunctionRequest->functionName = 'sit';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'laboriosam';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = UpdateUserDefinedFunctionXAmzTargetEnum::AWS_GLUE_UPDATE_USER_DEFINED_FUNCTION;

    $response = $sdk->sdk->updateUserDefinedFunction($request);

    if ($response->updateUserDefinedFunctionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkflow

Updates an existing workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWorkflowRequest();
    $request->updateWorkflowRequest = new UpdateWorkflowRequest();
    $request->updateWorkflowRequest->defaultRunProperties = [
        'provident' => 'facere',
        'sed' => 'inventore',
        'voluptatibus' => 'unde',
        'deserunt' => 'repellendus',
    ];
    $request->updateWorkflowRequest->description = 'consequatur';
    $request->updateWorkflowRequest->maxConcurrentRuns = 237972;
    $request->updateWorkflowRequest->name = 'Kara Glover';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'ratione';
    $request->xAmzTarget = UpdateWorkflowXAmzTargetEnum::AWS_GLUE_UPDATE_WORKFLOW;

    $response = $sdk->sdk->updateWorkflow($request);

    if ($response->updateWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
